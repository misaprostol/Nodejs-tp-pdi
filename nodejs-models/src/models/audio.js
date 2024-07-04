const { Sequelize } = require('sequelize');
const sequelize = require('../config/db_sequelize');

// Definir la estructura del Audio
const Audio = sequelize.define('audio', {
    id_audio: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_audio: {
        type: Sequelize.STRING(25),
        allowNull: false,
        validate:{
            isAlpha: true
        }
    },
    tipo_meditacion: {
        type: Sequelize.STRING(25),
        allowNull: false,
        validate:{
            isAlpha: true
        }
    },
    cant_reprod: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
            isInt: true,
        }
    },
}, {
  timestamps: false
})

Audio.sync();

module.exports = Audio;