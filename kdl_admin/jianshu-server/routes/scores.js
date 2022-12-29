let {
    getScore
} = require('../controller/scores')
const router = require('koa-router')()
router.prefix('/score')
//查询成绩
router.get('/getScore', getScore)


module.exports = router