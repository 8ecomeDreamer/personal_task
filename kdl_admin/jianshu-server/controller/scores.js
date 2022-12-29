let Scores = require('../model/scores')

const getScore = async ctx => {
    const rel = await Scores.find({})
    try {
        if (rel) {
            ctx.body = {
                code: 200,
                msg: '成绩查询成功',
                result: rel
            }
        } else {
            ctx.body = {
                code: 300,
                msg: '成绩查询失败'
            }
        }

    } catch (err) {
        ctx.body = {
            code: 500,
            msg: '成绩查询时出现异常',
            err
        }
    }
}

module.exports = {
    getScore
}