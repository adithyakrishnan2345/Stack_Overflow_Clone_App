import mongoose from "mongoose";

const QuestionSchema = mongoose.Schema({
    questionTitle:  { type:String,required:true},
    questionbody: { type:String,required:true},
    questionTags:{type:[String],required:true},
    noOfAnswers:{type:Number,default:0},
    upVote:{type:[String],default:[]},
    downVote : {type:[String],default:[]},
    userPosted : {type:String,required:"Question must have an author"},
    userId: {type:String},
    askedOn:{type:Date,default:Date.now},
    answer:[{
        answerBody:String,
        userAnswered:String,
        userId:String,
        answeredOn : {type:DataTransfer,default:Date.now},
    }]
})

export default mongoose.model("Question",QuestionSchema);