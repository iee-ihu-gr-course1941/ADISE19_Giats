const router = require('express').Router();
let User = require('../models/UserModel');

router.route('/').post((req,res) =>{
    var newuser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    User.findOneAndUpdate(
      { "_id":"5e073ec61c9d440000b97b01"}, 
      { $push: { users: newuser  } },
      function (error, success) {
        if (error) {
            res.send(error);
        } else {
            res.send(success);
        }
    }); 
});
 

module.exports = router;