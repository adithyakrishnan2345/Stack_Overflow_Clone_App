import mongoose from "mongoose";
import Questions from '../models/Questions.js'

export const postAnswer = async(req,res)=>{
    const {id:id}= req.params
    const { noOfAnswers,answerBody,userAnswered,userId} = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('question unavailable..')
    }
    updateNoOfQuestions(id,noOfAnswers)
    try{
        const updatedQuestion = await Questions.findByIdAndUpdate(id,{ $addToSet: { 'answer': [{answerBody,userAnswered,userId}]}})
        res.status(200).json(updatedQuestion)
   
    }catch(error){
         res.status(400).json(error)
    }
}

const updateNoOfQuestions = async(id,noOfAnswers)=>{
    try{
        await Questions.findByIdAndUpdate(id,{$set:{'noOfAnswers':noOfAnswers}})

    }catch(error){
        console.log(error)
    }
}

export const deleteQuestion = async( req,res) => {
    const {id:id} = req.params;
    const { answerId,noOfAnswers} = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('Question unavailable..')
    }
    if(!mongoose.Types.ObjectId.isValid(answerIdd)){
        return res.status(404).send('Answer unavailable..')
    }
    
    updateNoOfQuestions(id,noOfAnswers)
    try{
      await Questions.updateOne(
        { id },
        { $pull: { 'answer' : {id:answerId}}}
      )
      res.status(200).json({message:"Successful Deleted"})
    }catch(error){
       res.status(405).json(error)
    }
}