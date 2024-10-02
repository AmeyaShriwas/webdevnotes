import React from 'react'
import Notes from '../../Components/Notes/Notes'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const NotesPage = () => {
  const { error, isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate()

  useEffect(()=> {
     if(!isAuthenticated){
      navigate('/')
     }
  }, [])
  return (
    <>
    <Header/>
   <Notes/>
   <Footer/>
   </>
  )
}

export default NotesPage