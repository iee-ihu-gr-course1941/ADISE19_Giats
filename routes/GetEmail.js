const router = require('express').Router();
let User = require('../models/UserModel');

router.route('/').get((req, res) => {
    User.find({},{users: {$elemMatch: {email: req.query.email}}})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;