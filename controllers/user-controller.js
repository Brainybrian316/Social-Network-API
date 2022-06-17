const { User } = require('../models');

const userController = {
    getAllUsers(req, res) {
        User.find({})
        .populate('friends')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
},
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate('friends')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    },


    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    },

}

module.exports = userController;