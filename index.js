var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
const path = require('path');
var engine = require('socket.io');
var port = process.env.PORT || 8080;
var app = express();
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'realtimechat'
});


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('*', function (req, res){
  res.sendFile(path.resolve('index.html'))
})

app.post('/register', function (req, res){
	let values = req.body.values;
	let consulta = `INSERT INTO Usuarios VALUES(null,"${values[0]}","${values[1]}","${values[2]}","${values[3]}","${values[4]}");`;

	connection.query(consulta,(err,rows,fields)=>{
	   	if(err){
		 	console.log(err);
	 	}else{
	 		res.sendStatus(200);
	 	}
	});

})

app.post('/login', function (req, res){
	let values = req.body.values;
	let consulta = `SELECT * FROM Usuarios WHERE Usuario = ${values[0]} AND Contraseña = ${values[1]}`;

	connection.query(consulta,(err,rows,fields)=>{
	   	if(rows == '' || rows == undefined){
		 	res.send({ok:'no'});
		 }else{
		 	res.send({ok:'yes',datos:rows[0]});
		 }
	});

})


let server = app.listen(port,()=>{
	console.log('Corriendo en el puerto'+port);
})

const io = engine.listen(server);

io.on('connection',(socket)=>{
	socket.on('message',(msg)=>{
		io.emit('message',msg);
	})
})