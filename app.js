var express = require('express');
var mysql = require('mysql');
var cors = require('cors');

var app = express();
app.use(express.json());
app.use(cors());

//Establecemos los parametros de conexión
var conexion = mysql.createConnection({
    host     : 'localhost',
    user     : 'luiscvone',
    password : '',
    database : 'articulosdb'
});

//Probamos la conexión
conexion.connect(function(error){
    if(error){
        throw error;
    } else {
        console.log("Conexión exitosa a la base de datos!!!")
    }
});


app.get('/', function(req,res){
    res.send('Ruta de inicio');
});

//Mostrar todos los articulos
app.get('/api/articulos', (req,res)=>{
    conexion.query('SELECT * FROM articulos', (error,filas)=>{
        if(error){
            throw error;
        } else {
            res.send(filas);
        }
    })
});

//Mostrar un solo artículo
app.get('/api/articulos/:id', (req,res)=>{
    conexion.query('SELECT * FROM articulos WHERE id = ?', [req.params.id], (error, fila)=>{
        if(error){
            throw error;
        } else {
            res.send(fila);
            //res.send(fila[0].descripcion);
        }
    })
});

//Crear un artículo
app.post('/api/articulos', (req,res)=>{
    let data = {descripcion:req.body.descripcion, precio:req.body.precio, stock:req.body.stock};
    let sql = "INSERT INTO articulos SET ?";
    conexion.query(sql, data, function(error, result){
        if(error){
            throw error;
        } else {
            Object.assign(data, {id: result.insertId})
            res.send(data)
        }
    })
});

//Editar un artículo
app.put('/api/articulos/:id', (req, res)=>{
    let id = req.params.id;
    let descripcion = req.body.descripcion;
    let precio = req.body.precio;
    let stock = req.body.stock;
    let sql = "UPDATE articulos SET descripcion = ?, precio = ?, stock = ? WHERE id = ?";
    conexion.query(sql, [descripcion, precio, stock, id], function(error, results){
        if(error){
            throw error;
        } else {
            res.send(results);
        }       
    });
});

//Eliminar un artículo
app.delete('/api/articulos/:id', (req, res)=>{
    conexion.query('DELETE FROM articulos WHERE id = ?', [req.params.id], (error, filas)=>{
        if(error){
            throw error;
        } else {
            res.send(filas);
        }
    })
});

const puerto = process.env.PUERTO ||3000;

app.listen(puerto, function(){
    console.log("Servidor ok en puerto:"+puerto);
});