let {
    getInterview
} = require('../controller/interview')
const router = require('koa-router')()
router.prefix('/interview')
//查询成绩
router.post('/getInterview', getInterview)


module.exports = router