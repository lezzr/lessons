const fs = require('fs');
const fsPromises = require('fs/promises');
const { Transform } = require('stream');
const readline = require('readline');
const ACCESS_LOG = './access.log';
const LOG89 = './89.123.1.41_requests.log'
const LOG34 = './34.48.240.111_requests.log'

// fs.createReadStream()
const rl = readline.createInterface({
    input: fs.createReadStream(ACCESS_LOG,{
        flags: 'r',
        encoding: 'utf-8',
        // end: 1024 * 1024,
        // highWaterMark: 64
    }),
    output: process.stdout,
    terminal: false
})

const writeStream89 = fs.createWriteStream(LOG89, {
    encoding: 'utf-8',
    flags: 'a'
})
const writeStream34 = fs.createWriteStream(LOG34, {
    encoding: 'utf-8',
    flags: 'a'
})

rl.on('line', (line)=>{
    if(line.includes('89.123.1.41')){
        writeStream89.write(line)
        writeStream89.write('\n')
    }
    if (line.includes('34.48.240.111')){
        writeStream34.write(line)
        writeStream34.write('\n')
    }
})
rl.on('close', ()=> console.log('closed!') )


