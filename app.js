
const express = require('express');
const mysql = require('mysql2');
const dotenv = require("dotenv")
const cors = require("cors")

const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Configuración de la conexión a la base de datos
const db = () => mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'HoyTomeReliveran432',
    database: process.env.DB_DATABASE || 'DiseñoWeb',
    port: process.env.DB_PORT || "3306"
});

// Ruta para procesar el formulario
app.post('/suscribirse', async (req, res) => {
  const { nombre, email, numero, ciudades, mensaje } = req.body;
  
  const connection = db();

  const sql = 'INSERT INTO suscripciones (nombre, email, numero, ciudad, comentario) VALUES (?, ?, ?, ?, ?)';
  const values = [nombre, email, numero, ciudades, mensaje];

  const response = await new Promise((resolve) => {
    connection.query(sql, values, (err) => {
      if(err){
        connection.end()
        resolve(err)
      } else {
        connection.end();
        resolve({mensaje: "Consulta creada!"})
      }
    })
  })

  res.send(response)

});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
