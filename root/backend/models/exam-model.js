const mongoose = require("mongoose")
const Schema = mongoose.Schema


const OptionSchema = new Schema({
    optionNo: {type: String},
    option: {type: String},
    isCorrect: {type: Boolean}
});

const ExamSchema = new Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    examTitle: {type: String},
    examDescription: {type: String},
    examDate: {type: Date},
    startTime: {type: Number},
    endTime: {type: Number},
    noOfQues: {type: Number},
    questions: {type: [{quesNo: Number, ques: String, options: [OptionSchema]}]},
    examinees: {type: [String]}
});


const Exam = mongoose.model('Exam', ExamSchema);
module.exports = Exam;