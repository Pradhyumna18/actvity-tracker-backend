const signup=require('../controller/signup')
 const signin=require('../controller/signin')
const addActivity=require('../controller/addActivity')
const getActivities=require('../controller/Reports')
const show=require('../controller/show')
const resetPassword=require('../controller/changePassword')
const express=require('express')
const routes=express.Router();
routes.post('/signup',signup)
routes.post('/signin',signin)
routes.post('/addActivity',addActivity)
routes.get('/showActivities',getActivities)
routes.get('/show/:date',show)
routes.put('/changepassword',resetPassword)
module.exports=routes;