const models = require('../models')
let jwt = require('jsonwebtoken')
const passwordHash = require('password-hash')
async function resetPassword(req, res, next) {
    try {
        
        const user = await models.Users.findOne({
            where: {
                userName: req.body.userName
            }
        })
        const bool = passwordHash.verify(req.body.oldPassword, user.password);
        if (bool) {
            const p = req.body.newPassword;
            let hashedPassword = passwordHash.generate(p);
            user.update({ password: hashedPassword })
            res.status(200).json({
                message: "password changed successfully"
            })
        }
        else {
            res.status(404).json({
                message: "old password incorrect"
            })
        }
    }
    catch (err) {
        res.status(401).json(
            {
                message:"username doesn't exists"
            }
        )
    }
}
module.exports = resetPassword;