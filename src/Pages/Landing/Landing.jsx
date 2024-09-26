import React from 'react'
import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner'
import Category from '../../Components/Category/Category'
import Footer from '../../Components/Footer/Footer'
import AuthForm from '../../Components/Form/Form'
import { useState } from 'react'
import LeftPanel from '../../Components/LeftPanel/LeftPanel'
import PurchaseCategory from '../../Components/PurchaseCategory/PurchaseCategory'
import SocialMedia from '../../Components/SocialMedia/SocialMedia'
import VideoReels from '../../Components/VideoReels/VideoReels'
import Blog from '../../Components/BlogsBanner/BlogsBanner'


const Landing = () => {

 

  return (
    <>
    <Header/>
    <Banner/>
   
    <SocialMedia/>
     <PurchaseCategory/>
     <VideoReels/>
     <Blog/>
    <Footer/>
    </>
  )
}

export default Landing