const router = require("express").Router();
const Exam = require("../models/exam-model")
const User = require("../models/user-model");
const Response = require("../models/response-model")
const { route } = require("./auth-routes");

router.get('/', (req, res) => {
    res.send("Exams")
})


// Create a new exam
router.post('/create', async(req, res) => {
    try {
        var data = {
            createdBy : req.body.createdBy,
            examTitle : req.body.title,
            examDescription : req.body.description
        }
        var newExam = new Exam(data)
        await newExam.save().then((docs) => {
            User.updateOne(
                {_id: data.createdBy},
                { $push: {createdExams: docs._id}}
            ).then(() =>{
                console.log("Exam id added to user database")
            }).catch(err => console.log(err))
            res.status(200).json(
                docs
            );
        })
    } catch (err) {
        res.send(err)
    }
})


// Getting exams by their ID
router.get('/exam/:examId', async(req,res) => {
    try {
        var examId = req.params.examId;

        await Exam.findOne({_id: examId})
        .then(async(exam) => {
            if(exam == null){
                res.status(404).send("Exam Not Found")
            }
            else{
                res.status(200).json(exam)
            }
        })
    } catch (err){
        res.send(err)
    }
})


// Delete an already existing Exam
router.delete('/deleteexam/:examId/:userId', async(req, res) => {
    try{
        var examId = req.params.examId;
        var userId = req.params.userId;

        console.lo(examId)
        console.log(userId);

        await Exam.findOne({_id: examId})
        .then(async(exam) => {
            console.log(exam);
            if(exam == null){
                res.status(404).send("Exam not found or already deleted");
            }else{
                if(exam.createdBy == userId){
                    exam.remove(function(err){
                        if(err){ return res.status(500).send(err)}
                        console.log("Exam Deleted")
                        return res.status(202).send("Form Deleted")
                    });
                }
                else{
                    res.status(401).send("You are not the owner of this exam")
                }
            }
        })
    }
    catch(err){
        console.log(err)
    }
})


// Editing Exams
router.put("/editexam", async(req, res) => {
    try{
        var examId = req.body.examId;
        var data = {
            examTitle : req.body.title,
            examDescription : req.body.description,
            questions: req.body.questions
        }

        console.log("Exam Data")
        console.log(data)

        Exam.findByIdAndUpdate(examId, data, {new:true}, (err, result) => {
            if(err){
                res.status(500).send(err)
            }
            else{
                res.status(200).json(result)
            }
        })
    } catch(err){
        res.send(err)
    }
})

router.get('/getuserexams/:userId', async(req, res)=> {
    try{
        var userId = req.params.userId;
        console.log(userId);
        await User.findOne({_id: userId})
        .then(async(user)=>{
            if(user==null){
                res.status(404).send("User doesn't exist")   
            }
            else{
                await (await Exam.find().where('_id')).includes(user.createdExams).exec((err, records) => {
                    console.log(records);

                    res.status(200).json(records);
                })
            }
        })
    }catch(err){
        res.send(err)
    }
})


// submitting Response
router.get('/addresponse', async(req, res) => {
    try {
        var data = {
            examId: req.body.examId,
            userId: req.body.userId,
            response: req.body.response
        }
        console.log(data.examId);
        console.log(data.userId);

        if (data.responses.length > 0){
            var newResponse = new Response(data)

            await newResponse.save().then((docs) => {
                res.status(200).json(docs)
            })
        }
        else{
            res.status(400).send("Fill atleast one field")
        }
    }catch(err){
        res.send(err);
    }
})


// All responses
router.get('/responses', async(req, res) => {
    try{
        var result = await Response.find().lean()
        res.json(result)
    }
    catch(err){
        res.send(err)
    }
})


// get response
router.get('getresponse/:examId', async(req, res)=>{
    try{
        var examId = req.params.examId;
        await Response.find({examId: examId})
        .then(async(responses) => {
            res.status(200).json(responses)
        })
    }
    catch(err){
        res.send(err)
    }
})


module.exports = router;