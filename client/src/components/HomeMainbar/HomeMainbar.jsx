import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


import QuestionList from './QuestionList';

import './HomeMainbar.css'
import { useSelector } from 'react-redux';
const HomeMainbar = () =>{

  const questionList = useSelector(state => state.questionListReducer)
  //console.log(questionList)
    /*
    var questionList = [
        {
          id:1,
          votes:10 ,
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
            votes:10 ,
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
            votes:10 ,
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
    const location = useLocation()

    const user = null;
  const navigate = useNavigate();

  const redirect = () =>{
    alert("login or signup to ask a question")
            navigate.push('/Auth')
 }

  const checkAuth = () =>{
    if(user===null){
     alert("login or signup to ask a question")
     navigate('/Auth')
    }else
     navigate('/AskQuestion')
  }

    return (
        <div className='main-bar'>
          <div className='main-bar-header'>
               {
                location.pathname === '/' ? <h1>Top Questions</h1>:<h1>All Questions</h1>
               }

               <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
          </div>
          <div>
             {
                questionList.data === null?
                <h1>Loading..</h1>: <>
                 <p>{ questionList.data.length } questions </p>
                 
                    <QuestionList questionList = {questionList.data}/>
                    
                 </>  
             }
          </div>
        </div>
    )
}

export default HomeMainbar