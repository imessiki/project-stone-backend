const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    username: String,
    password: String,
    email: String,
});
const Admin = mongoose.model('Admin', AdminSchema)
module.exports = Admin;