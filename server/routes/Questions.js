import express from "express";

import { AskQuestion } from '../controllers/Questions.js'
import { getAllQuestions,deleteQuestion } from '../controllers/Questions.js'
import { voteQuestion } from "../../client/actions/question.js";
import auth from '../middleware/auth.js'

const router = express.Router()


router.post('/Ask',auth,AskQuestion)
router.get('/get',getAllQuestions)
router.post('/Ask',AskQuestion)
router.delete('/delete/:id',deleteQuestion)

router.patch('/vote/:id',auth,voteQuestion);

export default router