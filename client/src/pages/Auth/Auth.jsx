import React, { useState } from "react";

import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom';
import './Auth.css'
import icon from '../../image_assets/icon.png'
import AboutAuth from './AboutAuth'
import { signUp,login } from "../../api";

const Auth=()=>{
 const [isSignup,setIsSignup]=useState(false)
 
 const [Name,setName] = useState('');
 const [email,setEmail] = useState('');
 const [password,setPassword] = useState('')
  
const dispatch = useDispatch()

const navigate = useNavigate()



 const handleSwitch = () =>{
    setIsSignup(!isSignup)
 }


 const handleSubmit = (e) => {
    e.preventDefault()
    if(!email && !password){
        alert("Enter email and password")

    }
    if(isSignup){
        if(!Name){
            alert("Enter a name to continue")
        }
        dispatch(signUp({Name,email,password},navigate))
    }else{
         dispatch(login({email,password},navigate))
    }
     
    
 }
    return (
        <section class='auth-section'>
            { isSignup && <AboutAuth/>}
            <div class='auth-container-2'>
                { !isSignup && <img src={icon} alt='stack overflow' className="login-logo"/>}
            <form onSubmit={handleSubmit}>
                 {
                    isSignup && (
                        <label htmlFor='name'>
                            <h4>Display Name</h4>
                            <input type="text" id='name' name='name' onChange={(e)=>{setName(e.target.value)}}/>
                        </label>

                    )
            
                 }


                <label htmlFor="email">
                    <h4>Email</h4>
                    <input type='email' name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}}/>
                </label>
                <label htmlFor="password">
                  <div style={{color:"007ac6",display:"flex",justifyContent:"space-between"}}>
                    <h4>Password</h4>
                    {!isSignup && <p style={{color:"#007ac6",fontSize:'13px'}}>forgot password?</p>}
                 </div>
                    <input type='password' name = 'password' id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
                   {!isSignup && <p style={{color:"#666767",fontSize:"13px"}}>Password must contain atleast 8 characters</p>}
                </label>
                {
                    isSignup && (
                        <label htmlFor='check'>
                            <input type="checkbox" id='check'/>
                            <p>Subscribe to receive new updates <br/></p>
                        </label>
                      )
                }
                <button type='submit' className="auth-btn">{isSignup?'Sign up':'Log in'}</button>
            {
                isSignup && (
                       <p style={{color:"#666767", fontSize:"13px"}}>
                       By clicking "Sign up" , you agree to our 
                       <span style={{color:"#007ac6"}}>terms of service </span> ,
                        <span style={{color:"#007ac6"}}>privacy policy</span >and 
                       <span style={{color:"#007ac6"}}>cookie policy</span>.
                </p>
    )
            }
           
            </form>
            <p>
                {isSignup?'Already have an account?':"Don't have an account"}
               <button type="buttton" className="handle-switch-btn" />
            </p>
            </div>
 
        </section>
    )
}
export default Auth