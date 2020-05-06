//Koa2/controller/userController.js
const station = require("../service/stationService")
async function getStation(ctx,next){
 let data = await station.getStation()
 data = JSON.stringify(data)
 return JSON.parse(data)
}

module.exports={
    getStation
}
