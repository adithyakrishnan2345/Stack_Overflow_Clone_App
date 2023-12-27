import React, {useState} from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import copy from 'copy-to-clipboard'
import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import './Questions.css'
import Avatar from '../../components/Avatar/'
import DisplayAnswer from './DisplayedAnswer'
import { useSelector, useDispatch } from "react-redux";

import moment from 'moment'
import {postAnswer, deleteQuestion, voteQuestion} from '../actions/question'

const QuestionDetails = () =>{
     
    const { id } = useParams()
   // console.log(id)
   const questionList = useSelector(state=>state.questionReducer)
   console.log(questionList)
   /*  var questionList = [
        {
          id:1,
          upVotes:10, 
          downVotes:5,
          noofAnswers:2,
          QuestionTitle : "What is", 
          QuestionBody:" ",
          QuestionTags:[],
          userPosted:"",
          userId:"",
          askedOn:"",
          answer:[{
              answerBody:"",
              userAnswered:"",
              answeredOn:"",
              userId:""
          }]
         },
         {
            id:1,
            upVotes:10 ,
            downVotes: 4,
            noofAnswers:2,
            QuestionTitle : "What is", 
            QuestionBody:" ",
            QuestionTags:[],
            userPosted:"",
            userId:"",
            askedOn:"",
            answer:[{
                answerBody:"",
                userAnswered:"",
                answeredOn:"",
                userId:""
            }]
           },
           {
            id:1,
            upVotes:10 ,
            downVotes:3,
            noofAnswers:2,
            QuestionTitle : "What is", 
            QuestionBody:" ",
            QuestionTags:[],
            userPosted:"",
            userId:"",
            askedOn:"",
            answer:[{
                answerBody:"",
                userAnswered:"",
                answeredOn:"",
                userId:""
            }]
           }
        ] 
*/

    const [Answer,setAnswer] = useState('')
    
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const User = useSelector((state)=>(state.currentUserReducer))
    
    const location = useLocation()
    const url = "https://localhost:3000"


    const handleShare = () =>{
        copy(url+location.pathname)
        alert('Copied url : '+url+location.pathname)
    }

    const handlePostAns = (e,answerLength)=>{
      e.preventDefault()
      if(User === null){
         alert('Login or Signup to answer a question')
         Navigate('/Auth')
      }else{
        if(Answer === ''){
            alert('Enter an answer before submitting')
        }else{
            dispatch(postAnswer({id,noofAnswers: answerLength +1 , answerBody:Answer,userAnswered:User.result.name,userId:User.result.id}))
        }
      }
    }

    const handleDelete = ()=>{
          dispatch(deleteQuestion(id,Navigate))
    }

    const handleUpVote = ()=>{
        dispatch(voteQuestion(id, 'upvote',User.result.id))
    }

    const handleDownVote = () => {
        dispatch(voteQuestion(id,'downVote',User.result.id))
    }

    return (
        <div className="question-details-page">
           {
               questionList.data === null?
               <h1>Loading...</h1>:
               <>
                  {
                    questionList.data.filter(question => question.id === id).map(question => {
                       <div key={question.id}>
                       {console.log(question)}
                        <section className="question-details-container">
                            <h1>{question.QuestionTitle}</h1>
                            <div className="question-details-container-2">
                                <div>
                                <img src={upvote} alt="" width='18' className="votes-icon" onClick={handleUpVote}/>
                                <p>{question.upVote.length- question.downVote.length}</p>
                                <img src={downvote} alt="" width='18' className="votes-icon" onClick={handleDownVote}/>    
                             </div>
                             <div style={{width:"100%"}}>
                                <p className="question-body" >{question.QuestionBody}</p>
                                <div className="question-details-tags">
                                  {
                                    question.QuestionTags.map((tag)=>{
                                        <p key={tag}>{tag}</p>
                                    })
                                  }
                                </div>
                                <div className="question-actions-user">
                                    <div>
                                        <button type="button">Share</button>
                                        {
                                            User?result?.id==question : question?.userId && (
                                                     <button type='button' onClick={handleDelete}>Delete</button>
                                              )
                                        }      
                                        
                                    </div>
                                    <div>
                                        <p>asked {moment(question.askedOn).fromNow()}</p>
                                       <Link to={`/Users/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                        <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                        <div>
                                            {question.userPosted}
                                        </div>
                                       </Link>
                                    </div>
                                </div>
                             </div>
                            </div>
                        </section>
                        {
                            question.noofAnswers!==0 && (
                                <section>
                                    <h3>{question.noofAnswers}</h3>
                                <DisplayAnswer key={question.id} question={question}  handleShare={handleShare}/>
                                </section>
                            )
                        }
                        <section className="post-ans-container">
                            <h3>Your Answer</h3>
                            <form onSubmit={(e)=>handlePostAns(e,question.answer.length)}>
                                <textarea name="" id="" cols="30" rows="10" onChange={e=>setAnswer(e.target.value)}></textarea>
                                <input type="Submit" className="post-ans-btn" value="Post your Answer"/>           
                            </form>
                            <p>
                                Browse other questions tagged
                                {
                                    question.QuestionTags.map((tag)=>{
                                        <Link to='/Tags' key={tag} className="ans-tags">{tag}</Link>
                                    })
                                } or
                                <Link to='/AskQuestion' style={{textDecoration:"none",color:"#009dff"}}>Ask your own question</Link> 
                            </p>
                        </section>
                       </div> 
                    })
                  }
               
               </>
              }
        </div>
    )
}

export default QuestionDetails