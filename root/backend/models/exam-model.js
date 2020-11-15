const mongoose = require("mongoose")
const Schema = mongoose.Schema


// const OptionSchema = new Schema({
//     optionNo: {type: String},
//     option: {type: String},
//     isCorrect: {type: Boolean}
// });

const ExamSchema = new Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    examTitle: {type: String},
    examDescription: {type: String},
    examDate: {type: String},
    startTime: {type: String},
    endTime: {type: String},
    noOfQues: {type: Number},
    questions: [{
        questionText: {type: String},
        options: [{
            optionNo: {type: String},
            optionText: {type: String},
            isCorrect: {type: Boolean, default: false}
        }]
    }],
    examinees: {type: [String]}
});


const Exam = mongoose.model('Exam', ExamSchema);
module.exports = Exam;