let mongoose = require('mongoose')

//粉丝文档对象
let schema = new mongoose.Schema({
    testTitle: String, // 考试标题
    examinationTime: { // 考试时间
        type:Date,
        default:Date.now()
    },
    testScore: String, // 考试分数
    testScoreSpecification: String, // 考试分数说明
    lecturerReview: String , // 讲师点评
    headTeacherComments: String , // 班主任点评
    selfAssessment: String ,// 学生自评
    username:String
})

let Scores = mongoose.model('scores', schema)

module.exports = Scores