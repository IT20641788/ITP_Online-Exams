const router =  require("express").Router();
const exam = require("../models/exam");
const bcrypt= require("bcrypt");
  
router.route('/').get((req, res) => {
    exam.find()
        .then(exam => res.json(exam))
        .catch(exam => res.status(500).json('Error:'+ err));
});


// Add Exam
    router.post("/add", async (req, res) => {
        console.log("new exam")
        const newexamR = new exam(req.body);
            // console.log('exam ', newexamR);
            try {
              const savedExam = await newexamR.save();
            //   console.log('savedExam',savedExam)
              res.status(200).json(savedExam);
            } catch (err) {
              res.status(500).json(err);
            }
      
      });
      
// To get data from data base
router.route('/:id').get((req, res) => {
     console.log('get exam_id ',  req.params.id);
    exam.findOne({examId: req.params.id})
        .then(exam => {
            // console.log(exam);
            res.json(exam)
        }
        )
        .catch(err =>{
            console.log('err ', err);
            res.status(500).json('Error: ' + err)});
});

// Update by examID
router.put("/update/:id",async (req,res) => {
    console.log("update exam")
    let userId = req.params.id;
    const {
        examId,
        name,
        grade,
        subject,
        date,
        timeStart,
        timeEnd,
        notice} = req.body;

    const updateExam = {
        examId,
        name,
        grade,
        subject,
        date,
        timeStart,
        timeEnd,
        notice
    }
    const update = await exam.updateOne({
        examId: userId,
    }, updateExam).then(() => {
        res.status(200).send({status: "Exam updated"})

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with update data ", error: err.message});
    })   
})

//Update Mark to Exam Collection

router.route("/update/mark/:id").put(async (req,res) => {
    console.log('ud', req.params.id);
    let userId = req.params.id;
    const {
        examId,
        name,
        grade,
        subject,
        date,
        timeStart,
        timeEnd,
        notice,
        } = req.body;
    console.log('body ', req.body);
    const mark = req.body.mark;
    // const mark = [markArr]

    // Update Exam
    const updateExam = {
        examId,
        name,
        grade,
        subject,
        date,
        timeStart,
        timeEnd,
        notice,
        mark
    }

    console.log('up ', updateExam.mark)
    const update = await exam.updateOne({
        examId: userId,
    }, updateExam).then(() => {
        res.status(200).send({status: "Exam updated"})

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with update data ", error: err.message});
    })   
})
// End of updatong Mark function

// delet by ExamID
router.delete("/delete/"), async(req, res) => {
    console.log("delect exam")
 
    try {
      const deletedExam = await exam.findOneAndDelete({'examId':req.params.examId});
      try {
        await deletedExam.delete();
        res.status(200).json("Exam has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(500).json(err);
    }

  };

// router.route("/delete/:id").delete(async (req, res) => {
//     let userId = req.params.id;

//     await Exam.deleteOne({
//         examId: userId,
//     }).then(() => {
//         res.status(200).send({status: " User deleted "});
//     }).catch((err) => {
//         res.status(500).send({ status: " Error with deleted  user", error: err.massage});
//     })
// })

router.route("/get/:id").get(async (req, res) => {
    console.log("get exam")
    let userId = req.params.id;
    const user = await Exam.findOne({
        examId: userId,
    }).then((exam) => {
        res.status(200).send({status: "User fetched ", exam})
    }).catch((err) => {
        console.log(err.massage);
        res.status(500).send({status: " error with get User ", error: err});
    })

})

module.exports = router;

