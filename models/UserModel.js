const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserModelSchema = new Schema({
    users: [Object]
});

const UserModel = mongoose.model('battleships', UserModelSchema);

module.exports = UserModel;