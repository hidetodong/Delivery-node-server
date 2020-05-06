const router = require('koa-router')()
const station = require("../controller/stationController")

router.prefix('/station')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.post('/new', async (ctx, next) => {
  let data =  await station.getStation(ctx,next)
  ctx.set("Content-Type", "application/json")
  ctx.body = {
      data:data
  }
})

module.exports = router
