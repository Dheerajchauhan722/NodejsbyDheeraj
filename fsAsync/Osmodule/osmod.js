const os=require('os');

const mem=os.freemem()

console.log(`${mem/1024/1024/1024}`);