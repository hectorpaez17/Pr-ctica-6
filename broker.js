const mosca = require('mosca')

const broker = mosca.Server({
    port: 9000
})

broker.on('ready', () =>{
    console.log('Mosca is ready!!')
})

broker.on('clientConnected', (client) =>{
    console.log('New client; ' + client.id)
})

broker.on('published', (packet) =>{
    console.log(packet.payload.toString())
})