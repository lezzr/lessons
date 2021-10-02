const moment = require('moment')
const EventEmitter = require('events')
const emitter = new EventEmitter()
// console.log(moment().format())
// console.log(moment("17:28 02 10 2021", "hh:mm DD MM YYYY").format("hh:mm DD.MM.YYYY"))

// let diff = fut - date_now
// let dura = moment.duration(diff, 'milliseconds')
// console.log(dura._milliseconds)
// emitter.on('ended', ()=>{
//     console.log("закончилось")
// })
let futur = moment(process.argv[2], "hh-mm-DD-MM-YYYY").format('x')
let futur1 = moment(process.argv[2], "hh-mm-DD-MM-YYYY").format("hh:mm DD MM YYYY")


let getDiff = () =>{
    let fut = futur
    let date_now = moment().format('x')
    let diff = fut - date_now
    return diff
}


const run = async () => {
    // let diff = moment(getDiff()).format('ss')
    let diff = getDiff()
    if (diff >= 0){
        let diffTime = moment(diff).format('ss')
        emitter.emit('tick', diffTime)
        await new Promise(resolve =>  setTimeout(resolve,1000))
        await run();
    }
    else emitter.emit('ended')
}

class Handler{
    static tick(diff){
        console.log('до', futur1, 'осталось:', diff, 's')
    }
    static ended(){
        console.log('кончилось время')
    }
}

emitter.on('tick', Handler.tick)
emitter.on('ended', Handler.ended)
// saySec(){
//     console.log('secs')
// }
// setTimeout(saySec,getDiff())
// const countdown = () => {
//
// }
// const count = async (fut, date_now)=>{
//     const res = fut - date_now
//     await new Promise(resolve => {setTimeout(resolve, dura)})
//
//     // if(res >= 0){
//     //     emitter.emit('tick', ()=>{
//     //         console.log("tick")
//     //     })
//     //     return res
//     //     console.log(res)
//     //
//     // }
//     // else {
//     //     emitter.emit('ended', ()=>{
//     //         console.log("закончилось")
//     //     })
//     //     res = 'netu'
//     //
//     //     return res
//     //
//     // }
// }

run()


