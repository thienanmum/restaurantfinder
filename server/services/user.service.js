const User = require('../models/user');

var service = {};
service.create = create;
service.update = update;
service.delete = _delete;
service.getAll = getAll;
module.exports = service;

function getAll() {
    return User.find();
}

function getById(_id) {
    return User.findById(_id);
}

function create(userParam) {
    userParam._id = null;
    return User.create(userParam);
}

function update(_id, userParam) {
    return User.findByIdAndUpdate(_id, userParam);
}

function _delete(_id) {
    return User.findByIdAndRemove(_id);
}