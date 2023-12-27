import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './AskQuestion.css'
import { useNavigate } from 'react-router-dom'


import{askQuestion } from '../../actions/question'


const AskQuestion = () =>{
  
 const [questionTitle,setQuestionTitle] = useState('')
 const [questionBody,setQuestionBody] = useState('')
 const [questionTags,setQuestionTags]= useState('')
 
 const dispatch = useDispatch()

 const user = useSelector((state)=> {state.currentUserReducer});
 const navigate = useNavigate();

 const handleSubmit = (e)=>{
    e.preventDefault()
    //console.log({questionTitle,questionBody,questionTags})
    dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted:user.result.name,userId:user?.result.id},navigate))
}

 const handleEnter = (e)=>{
    if(e.key==='Enter')
     {
        setQuestionBody(questionBody+"\n")
     }
 }

 const redirect = () =>{
    alert("login or signup to ask a question")
            navigate.push('/Auth')
 }
    return (
        <div className='ask-question'>
            <div className='ask-ques-container'>
                <h1>Ask a public question</h1>
                <h1>{questionBody}</h1>
                <form onSubmit={handleSubmit}>
                     <div className='ask-form-container'>
                        <label htmlFor='ask-ques-title'>
                            <h4>Title</h4>
                            <p>Be specific and imagine you're asking a question</p>
                            <input type="text" name = "questionTitle" onChange={(e)=>{setQuestionTitle(e.target.value)}} id="ask-ques-title" placeholder=''/>
                        </label>
                        <label htmlFor='ask-ques-body'>
                            <h4>Title</h4>
                            <p>Include all the information</p>
                            <textarea name=''  onChange={(e)=>{setQuestionBody(e.target.value)}} id='ask-ques-body' cols='30' rows='10' onKeyPress={handleEnter}></textarea>
                          
                        </label>
                        <label htmlFor='ask-ques-tags'>
                            <h4>Title</h4>
                            <p>Add upto 5 tags to describe what your question is about</p>
                            <input type="text" name = "questionTitle" id="ask-ques-tags" onChange={(e)=>{setQuestionTags(e.target.value.split(" "))}} placeholder='(eg:- html,wordpress)'/>
                        </label>
                     </div>
                     <input type="submit" value="Review your question" className='review-btn'/>
                </form>
            </div>
        </div>
    )
}

export default AskQuestion