import React from "react";
import moment from "moment";
import {deleteAnswer} from '../../actions/question'
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import Avatar from '../../components/Avatar/Avatar'
import { useDispatch, useSelector } from "react-redux";

const DisplayAnswer = ({question,handleShare}) => {
    
    const User = useSelector((state)=>(state.currentUserReducer))
    const dispatch = useDispatch()
    const { id } = useParams()

    const handleDelete = (answerId,noOfAnswers)=> {
        dispatch(deleteAnswer(id,answerId,noOfAnswers-1))
    }
   
    return (
        <div>
           {
            question.answer.map((ans)=>{
                <div className="display-ans" key={ans.id}>
                    <p>ans.answerBody</p>
                    <div className="question-actions-star">
                        <div>
                            <button type="button" onClick={handleShare}>Share</button>
                           {
                            User.result?.id === ans?.userId && (
                                <button type="button" onClick={()=>handleDelete(ans.id,question.noOfAnswers)}>Delete</button>
                            )
                           }
                            

                        </div>
                        <div>
                            <p>answered {moment(ans.answeredOn).fromNow()}</p>
                            <Link to={`/User/${ans.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                        <Avatar backgroundColor="green" px='8px' py='5px'>{answer.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                        <div>
                                            {ans.userAnswered}
                                        </div>
                                       </Link>
                        </div>
                    </div>
             </div>
            })
           }
        </div>
    )
}

export default DisplayAnswer;
