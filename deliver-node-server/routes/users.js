const router = require('koa-router')()
const user = require("../controller/usersController")

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.get('/new', async (ctx, next) => {
  let data =  await user.findUser(ctx,next)
  ctx.set("Content-Type", "application/json")
  ctx.body = data
})

module.exports = router
