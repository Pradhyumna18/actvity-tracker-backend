const models = require('../models')
let passwordHash = require('password-hash')
async function SignUp(req, res, next) {
    try {
        const data = await models.Users.findAll({
            where: {
                userName: req.body.userName
            }
        })
        if (Object.values(data).length==0) {
              
            const p = req.body.password;
            let hashedPassword = passwordHash.generate(p);
            req.body.password = hashedPassword;
            const user = await models.Users.create(req.body);
            res.status(200).json(
                {user,
                data}
            );
            
        }
        else {
            res.status(400).json(
                { message: "username already exists"}
            )
        }
    }
    catch (err) {
        res.status(400).json(
            err
        )
    }
}
module.exports = SignUp;