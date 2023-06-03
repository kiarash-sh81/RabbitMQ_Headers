const amqp = require('amqplib');
const ExchangeName = "HeaderMessage";
async function sendData(){
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    await channel.assertExchange(ExchangeName , 'headers' );
    channel.publish(ExchangeName , '' ,Buffer.from("my message") , {headers:{
        author: "kiarash",
        runtime: "nodejs",
        price: 998,
        comments: []
    }})
    setTimeout(()=>{
        process.exit(0);
    })
}

sendData()