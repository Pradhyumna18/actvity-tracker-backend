const models = require('../models')
let jwt = require('jsonwebtoken')
const passwordHash = require('password-hash')

async function SignIn(req, res, next) {
    try {
        const user = await models.Users.findOne({
            where: {
                userName: req.body.userName
            }
        })
        if(user)
        {
        const bool = passwordHash.verify(req.body.password, user.password);
        if (!bool) {
            res.status(401).json({
                message: " password incorrect"
            })
        }
        else {
            var token = jwt.sign({ userName: req.body.userName , userId:user.id}, "abcd")
            res.status(200).json({
                token: token
            })
        }
    }
    else{
        res.status(404).json({
            message:"username doesn't exists"
        })

    }
    }
    catch (err) {
        next(err)
    }
}
module.exports = SignIn;
