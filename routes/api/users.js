const router = require('koa-router')()
const userController = require('../../controllers/client/user')
const passport = require("../../middlewares/passport")

router.prefix('/api/users')

router.post('/postuser',userController.postuser)

router.post('/postlogin', userController.postlogin)

router.all('/*',
    passport.authenticate('jwt', { session: false })
    , async (ctx, next) => {
        console.log(ctx.request)
        await next()
    })

router.get('/userinfo', userController.userinfo)

router.put('/putpassword',userController.putpassword)

router.get('/getallinfo', userController.getallinfo)

router.delete('/deleteuser/:id', userController.deleteuser)

router.get('/getoneuserinfo/:id', userController.getoneuserinfo)

router.put('/putoneuserinfo/:id', userController.putoneuserinfo)

router.post('/postoneuser', userController.postoneuser)

module.exports = router





