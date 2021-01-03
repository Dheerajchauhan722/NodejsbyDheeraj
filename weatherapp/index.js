const fs=require('fs');
const http=require('http');
const requests=require('requests');
const homeFile=fs.readFileSync('home.html','utf-8');

const replaceVal=(tempval,orgval)=>{
    let temperature=tempval.replace("{%tempmain%}",(orgval.main.temp-273.15).toFixed(1));
     temperature=temperature.replace("{%tempmin%}",(orgval.main.temp_min-273.15).toFixed(1));
     temperature=temperature.replace("{%tempmax%}",(orgval.main.temp_max-273.15).toFixed(1));
     temperature=temperature.replace("{%tempstatus%}",orgval.weather[0].main);
     temperature=temperature.replace("{%country%}",orgval.sys.country);
     temperature=temperature.replace("{%location%}",orgval.name);
    return temperature;
};

const server=http.createServer((req,res)=>{

    if(req.url=="/"){
    requests("http://api.openweathermap.org/data/2.5/weather?q=palwal&appid=be9b5eb723e2c6af1bf3a4c1222984c0")
    .on('data',(chunk)=>{
        const objData=JSON.parse(chunk);
        const objArr=[objData];
        // console.log(objArr);
        const realTimeData=objArr.map((val)=>
        replaceVal(homeFile,val)).join("");
        res.write(realTimeData);
        // console.log(realTimeData);
    })
    .on('end',(err)=>{
        if(err) return console.log("Connection closed due to errors",err);
        // console.log("end");
        res.end();
    });
    }
    else{
        res.end("File not found");
    }

});

server.listen(8000,'127.0.0.1',()=>{
    console.log('listening at port 8000');
});
