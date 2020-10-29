var mongoose = require('mongoose')

const ResponseSchema = new mongoose.Schema({
    examId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam'
    },
    userId: {
        type: String
    },

    response : [{
        questionId: String,
        optionId: String
    }]
})

const Response = mongoose.model('Response', ResponseSchema);
module.exports = Response;