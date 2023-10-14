
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'HoyTomeReliveran432',
    database: 'DiseñoWeb',
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.message);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

// Middleware para procesar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para procesar el formulario
app.post('/suscribirse', (req, res) => {
  const { nombre, email, numero, Ciudades, mensaje } = req.body;

  const sql = 'INSERT INTO suscripciones (nombre, email, numero, ciudad, comentario) VALUES (?, ?, ?, ?, ?)';
  const values = [nombre, email, numero, Ciudades, mensaje];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar datos en la base de datos: ' + err.message);
      res.status(500).send('Error al suscribirse.');
    } else {
      console.log('Suscripción exitosa');
      res.send('¡Suscripción exitosa!');
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
