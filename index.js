const socket = require('socket.io');
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    const readStream = fs.createReadStream(indexPath);
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    readStream.pipe(res);
    // const indexHTML = fs.readFileSync(indexPath);
    // res.end(indexHTML);
});
const io = socket(server);

// function nameGen() {
//     return (Math.random() + 1).toString(36).substring(7)
// }
//
// const randomName = nameGen()
userCount = 0

io.on('connection', client => {


    //connected
    console.log('User Connected(server msg)');

    client.broadcast.emit('client-connect')

    client.on('client-connect-emmit', ({ clientName }) => {
        const data = {
            clientName: clientName
        }
        userCount ++
        console.log(`${clientName} is connected`)
        client.broadcast.emit('client-connect-server-response', data, userCount);
        client.emit('client-connect-server-response', data, userCount);
    });


    //messaging
    client.on('client-msg', ({ message, clientName }) => {
        // console.log(data);
        const data = {
            message: message.split('').reverse().join(''),
            clientName: clientName
        }
        client.broadcast.emit('server-msg', data);
        client.emit('server-msg', data);
    });
    //disconnected
    client.once('disconnect', ({ clientName })=>{
        const data = {
            clientName: clientName
        }
        // client.broadcast.emit('disconnect');
        userCount --
        console.log(`client ${clientName} disconnected(server msg)`)
        client.broadcast.emit('client-disconnect-server-response', data, userCount);
        client.emit('client-disconnect-server-response', data, userCount)
    })
    //reconnected
    client.on('reconnect', ()=>{
        // client.broadcast.emit('disconnect');
        console.log('client disconnected(server msg)')
        client.broadcast.emit('reconnected');
    })
});

server.listen(5555);
