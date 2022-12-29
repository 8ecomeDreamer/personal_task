let mongoose = require('mongoose')

//粉丝文档对象
let schema = new mongoose.Schema({
    campus: String, // 校区
    class: String, // 班级
    studentNo: String, // 学号
    studentName: String, // 学生姓名
    interviewCity: String , // 面试地市
    interviewCompany: String , // 面试公司
    interviewMode: String, // 面试方式
    interviewTime: { 
        type:Date,
        default:Date.now()
    }, // 面试时间
    interviewPeriod: String, // 面试时间段
    interviewAddress: String , // 面试地址
    interviewPosition: String , // 面试岗位
    interviewArea: String, // 面试区域
    state: String  // 状态
})

let Interview  = mongoose.model('interview', schema)

module.exports = Interview 