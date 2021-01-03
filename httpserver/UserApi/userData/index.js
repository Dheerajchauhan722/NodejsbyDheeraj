const fs = require('fs');
const http=require('http');

const server=http.createServer((req,res)=>{
    const data=fs.readFileSync(`E:/NODEJSFORYOUTUBE/httpserver/UserApi/userapi.json`,'utf-8');
    const objData=JSON.parse(data);
    

    // console.log(req.url);  // we can get url using this rquest
    
    if(req.url=='/')
        res.end('helo from Home side Mr Dheeraj Chauhan');
    else if(req.url=='/userapi')
    {
        res.writeHead(200,{'Content-type':'application/json'});
        res.end(objData[0]['name']);
        
    }
    
    else
    {
        res.writeHead(404,{'Content-type':'text/html'});
    res.end(' <h1> Please enter valid url : 404 page not found </h1>');

    }

});

server.listen(8000,'127.0.0.1',()=>{
    console.log('listening at port 8000');
});