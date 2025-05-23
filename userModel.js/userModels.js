const mongoose = require('mongoose');

const userSchema = new Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true}
})

const usuario = mongoose.model('Usuario', userSchema, 'usuarios');
module.exports = usuario; 

