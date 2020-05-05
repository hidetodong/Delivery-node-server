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
  // ctx.body = '这是一个新的接口！'
  await next()
   let data = user.findUser(ctx,next)
  // let data = [{
  //   name:'1'
  // },{
  //   name:'2'
  // }]
  ctx.set("Content-Type", "application/json")
  console.log('123')
  ctx.body = {
    name:data
  }
})

module.exports = router
