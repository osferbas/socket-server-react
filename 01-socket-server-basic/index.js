const Server = require("./models/server.js");
require("dotenv").config();

const server = new Server();

server.execute();

// const app = express();
// //servidor de sockets
// const server = require('http').createServer(app);
// //Configuracion del socket server
// const io = require('socket.io')(server);
// //Desplegar el directoriopublico
// app.use(express.static(__dirname +"/public"));
// io.on('connection', (socket) => { 
//     socket.emit("mensaje-bienvenida",{
//         msg: "bienvenido al server",
//         fecha: new Date()
//     });
//     socket.on("mensaje-to-server",(data)=>{
//             console.log(data)
//             io.emit("mensaje-from-server",data);
//         });
    
//     // socket.on("mensaje-cliente",(data)=>{
//     //     console.log(data)
//     // });
// });
// server.listen(8080,()=>{
//     console.log("Server corriendo en el puerto :8080")
// });