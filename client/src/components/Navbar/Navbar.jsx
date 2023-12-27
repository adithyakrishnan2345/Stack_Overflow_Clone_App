import React,{useEffect} from 'react'
import logo from '../../image_assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button/Button'
import './Navbar.css'
import { setcurrentUser } from '../../../actions/currentUser'
import decode from 'jwt-decode'

const Navbar = () => {
    const dispatch = useDispatch()
    var User = useSelector((state)=>(state.currentUserReducer))
    
    const navigate = useNavigate()

    const handleLogout = () => {
      dispatch({ type:'LOGOUT'})
      navigate('/')
      dispatch(setcurrentUser(null))
    }

    useEffect(()=>{

      const token = User?.token
      if(token){
         const decodedToken = decode(token)
         if(decodedToken.exp * 1000 < new Date().getTime()){
            handleLogout()
         }
      }

      dispatchEvent(setcurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch])

    return (
        <div>
             <nav className='main-nav'>
                <div className='navbar'>
                 <Link to='/' className='nav-item nav-logo'>
                    <img src={logo} alt='logo'/>

                 </Link>
                 <Link to='/' className='nav-item-nav-btn'>About</Link>
                 <Link to='/' className='nav-item-nav-btn'>Products</Link>
                 <Link to='/' className='nav-item-nav-btn'>Teams</Link>
                 <form>
                    <input type='text' placeholder='Search..'/>
                    <img src='' alt='search' width='18' className='search-icon'/>
                 </form>
                 
                 {User === null ?
                  <Link to='/Auth' className='nav-item nav-links'>Log In</Link> :
                  
                  <>
                     <Avatar backgroundColor='#009dff'  px='12px' py='7px' borderRadius="50%" color='white'/><Link to={`/Users/${User?.result?.id}`} style={{color:"white",textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase}</Link><Avatar/>
                     <button className="nav-item nav-links" onClick={handleLogout}>Log Out</button>
                  </>
                }


                </div>
             </nav>
        </div>
    )
}

export default Navbar