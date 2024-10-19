import React from 'react'
import { Suspense } from 'react'
import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner'
import Footer from '../../Components/Footer/Footer'
import PurchaseCategory from '../../Components/PurchaseCategory/PurchaseCategory'
import SocialMedia from '../../Components/SocialMedia/SocialMedia'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Landing = () => {

  const {isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate()

  useEffect(()=> {
     if(!isAuthenticated){
      navigate('/')
     }
  }, [])

 

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Header/>
    <Banner/>
   
    <SocialMedia/>
     <PurchaseCategory/>
    <Footer/>
    </Suspense>
  )
}

export default Landing