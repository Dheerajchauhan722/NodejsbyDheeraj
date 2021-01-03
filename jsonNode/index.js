const fs=require('fs');

const data={
    name :"Dheeraj Chauhan",
    age : 32,
    sec :'v'
}

//object to json
const jsondata=JSON.stringify(data);
console.log(jsondata);
// console.log(jsondata.sec);// cannot do like it

// json to obj
const objdata=JSON.parse(jsondata);
console.log(objdata);

// fs.writeFile('jsondata.txt',jsondata,(err)=>{
// });

let final_objdata;
fs.readFile('jsondata.txt','utf8',(err,data)=>{
    final_objdata=JSON.parse(data);
    console.log(final_objdata);
});

console.log(final_objdata);

