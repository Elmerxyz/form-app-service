 const { Cliente } = require('../models');  // Asegúrate de importar Cliente correctamente

// Crear un cliente
exports.createCliente = async (req, res) => {
  try {
    const { nombre, correo } = req.body;

    if (!nombre || !correo) {
      if (req.path.startsWith('/api')) {
        return res.status(400).json({ message: 'Nombre y correo son requeridos' });
      }
      return res.redirect('/clientes?error=Faltan datos');
    }

    const nuevoCliente = await Cliente.create({
      nombre,
      correo
      // fecha_registro y bienvenida_enviada usan sus valores por defecto
    });

    if (req.path.startsWith('/api')) {
      return res.status(201).json({
        message: 'Cliente creado correctamente',
        cliente: nuevoCliente
      });
    }

    res.redirect('/clientes');  // Redirige a la vista de clientes en HTML

  } catch (error) {
    console.error('Error al crear cliente:', error);
    if (req.path.startsWith('/api')) {
      return res.status(500).json({ message: 'Error al crear cliente', error: error.message });
    }
    res.redirect('/clientes?error=Error al crear cliente');
  }
};
