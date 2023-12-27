import React from 'react'
import './RightSidebar.css';
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/blacklogo.svg'

const Widget = () =>{
    return (
        <div className='widget'>
          <h4>The overflow blog</h4>
         <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18'/>
         <p>Observability is the key to future of software(and your DevOps career)</p>
          </div>

          <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18'/>
         <p>Podcast : How valuable is your screen name?</p>
          </div>
         </div>

         <h4>Featured on Meta</h4>
         <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
            <img src={comment} alt="pen" width='18'/>
         <p>Review queue workflows</p>
          </div>

          <div className='right-sidebar-div-2'>
            <img src={comment} alt="pen" width='18'/>
         <p>Please welcome valued associations:</p>
          </div>

          <div className='right-sidebar-div-2'>
            <img src={comment} alt="pen" width='18'/>
         <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
          </div>
         </div>
         
         <h4>Hot Meta Posts</h4>
         <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18'/>
          <p>38</p>
         <p>Why was this spam flag declined?</p>
          </div>

          <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18'/>
           <p>20</p>
         <p>Podcast : How valuable is your screen name?</p>
          </div>

          <div className='right-sidebar-div-2'>
            <img src={comment} alt="pen" width='18'/>
            <p>14</p>
         <p>Is a link to "How to ask" page useful?</p>
          </div>
         </div>
        </div>
    )
}

export default Widget