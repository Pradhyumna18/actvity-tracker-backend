const models = require('../models')
const jwt = require('jsonwebtoken')
async function addActivity(req, res, next) {
    try {
        const token = req.headers['access-token']
        const payload = jwt.decode(token)
        const obj = { ...req.body, userId: payload.userId }
        const act = await models.Activities.create(obj)
        res.status(200).json({
            act
        })
    }
    catch (err) {
        next(err)
    }
}
module.exports = addActivity;