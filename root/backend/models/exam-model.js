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
        quesNo: Number, 
        ques: String, 
        options: {
            optionNo: {type: String},
            option: {type: String},
            isCorrect: {type: Boolean}
        }
    }],
    examinees: {type: [String]}
});


const Exam = mongoose.model('Exam', ExamSchema);
module.exports = Exam;