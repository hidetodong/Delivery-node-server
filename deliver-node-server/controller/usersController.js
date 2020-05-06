//Koa2/controller/userController.js
const user = require("../service/usersService")
async function findUser(ctx,next){
 let data = await user.findUser()
 data = JSON.stringify(data)
 console.log(JSON.parse(data))
 return JSON.parse(data)
}

module.exports={
   findUser
}
