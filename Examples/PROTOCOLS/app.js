const port = process.argv[2];
const addr = process.argv[3];

const dgram = require("dgram");
const server = dgram.createSocket("udp4");

server.on("error",(err) => {
    console.log(`Server Error ${err.stack}`);
    server.close();
});

server.on("messge", (msg, info) => {
    console.log(msg.toString().trim());
});

server.on("listening", ()=>{
    const address = server.address();
    console.log(`server listening ${address.address}, ${address.port}`);
});


server.bind(port, addr);

process.stdin.on("data", (d) => {
    if(d.toString().trim() == "exit"){
        return process.exit();
    }

    server.send(d, 5555, "localhost", (err) => {
        if(err){
            console.log(err);
            throw err;
        }
    });
})