// много синхронных потоков
// node.js однопоточный но все выполняет асинхронно с помощью eventloop (цикл событий)
// libuv (c++ )

// console.log(1);
// Promise.resolve().then(() => console.log(2));
// setTimeout(() => {
//     console.log(3);
//     Promise.resolve().then(() => console.log(4));
// });

// Promise.resolve().then(() => {
//     Promise.resolve().then(() => {
//         console.log(5);
//     });
//     console.log(6);
// });
// // 1 7 2 6 5 3 4
//
// console.log(7);

const EventEmitter = require('events');

const RequestTypes = [
    {
        type: 'send',
        payload: 'to send a document',
    },
    {
        type: 'receive',
        payload: 'to receive a document',
    },
    {
        type: 'sign',
        payload: 'to sign a document',
    },
];

class Customer {
    constructor({ type, payload }) {
        this.type = type;
        this.payload = payload;
    }
}

const generateIntInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const delay = (ms) => {
  return Promise.resolve(resolve => setTimeout(resolve, ms));
}

const generateNewCustomer = () => {
    const params = RequestTypes[generateIntInRange(0, RequestTypes.length - 1)];
    return new Customer(params);
}

const run = async () => {
  const customer = generateNewCustomer();

  emitter.emit(customer.type, customer.payload);
  await new Promise(resolve => setTimeout(resolve, generateIntInRange(1000, 5000)));
  await run();
}

class Handler {
    static send(payload) {
        console.log('Send request', payload);
    }
    static receive(payload) {
        console.log('Receive request', payload);
    }
    static sign(payload) {
        console.log('Sign request', payload);
    }
}
const emitter = new EventEmitter();

// emitter.on('send', (payload) => {
//     console.log(payload);
// });
// emitter.emit('send', 'to send a document');

emitter.on('send', Handler.send);
emitter.on('receive', Handler.receive);
// emitter.on('sign', Handler.sign);
emitter.on('sign', () => {
    emitter.emit('error', 'Pen is broken');
});
emitter.on('error', console.log)
// несколько обработчиков
// удалить emitter.removeListener()
// emitter.once() - выполняет только один раз и удаляется
// default 10 listeners emitter.setMaxListeners();

run();
