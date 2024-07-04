const { Sequelize } = require('sequelize');
const sequelize = require('../config/db_sequelize');

// Definir la estructura del Usuario
const Usuario = sequelize.define('usuario', {
    id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: Sequelize.STRING(25),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    contrasena: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
  /* Suponiendo que queramos una FK
  vendedor: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Vendedores',
      key: 'id'
    }
  }
  */
}, {
  timestamps: false
})

Usuario.sync();
// Usuario.sync({alter: true}) | Usuario.sync({force: true})

module.exports = Usuario;