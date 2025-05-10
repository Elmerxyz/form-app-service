require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const clienteController = require('../controllers/clienteController');


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Configuración de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));
app.use(express.static(path.join(__dirname, 'app/views')));

// Rutas
app.get('/', (req, res) => {
  res.redirect('/clientes');
});

router.post('/clientes', clienteController.createCliente);
router.post('/api/clientes', clienteController.createCliente);
// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});