import React from 'react'
import { useEffect } from 'react'
import Home from './Pages/Home.jsx'
import Player from './Pages/Player.jsx'
import Login from './Pages/Login.jsx'
import {BrowserRouter,Routes , Route} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from './firebase.js'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {

  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) =>{
      if(user){
        console.log("Loged In")
        navigate('/')
      }else{
        console.log("Loged Out")
        navigate('/login')
      }
    })
  },[])
  

  return (
    <>
     <ToastContainer theme='dark' />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Player/:id' element={<Player/>}/>
    </Routes>
    </>
  )
}

export default App
