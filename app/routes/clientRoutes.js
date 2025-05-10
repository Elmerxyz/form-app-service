const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clienteController');

// Rutas para la API y Web (CRUD)
router.get('/', clientController.getAllClientes);  // Mostrar la lista de clientes

// Ruta para crear un nuevo cliente (Formulario)
// En el controlador que maneja la ruta '/nuevo'
router.get('/nuevo', (req, res) => {
  res.render('nuevoCliente', { 
    title: 'Nuevo Cliente',
    error: req.query.error || ''  // Pasamos el error si existe
  });
});

// Ruta para crear un cliente (POST)
router.post('/', clientController.createCliente); // Maneja el POST para registrar un nuevo cliente

module.exports = router;
