import React, { useEffect, useState } from "react";
import {Route,Routes, useLocation,} from 'react-router-dom'
import Header from "../components/Ui/Header";
import { Home } from "../pages/Home";
import { Footer } from "../Common/Footer";
import { AboutUs } from "../pages/AboutUs";
import Loader from "../Common/Loader";
import { Services } from "../pages/Services";
import { Sidebar } from "../Common/Sidebar";
import SignUp from "../pages/Employers/SignUp";
import { EmployersPage } from "../pages/Employers/EmployersPage";
import SignIn from "../pages/Employers/SignIn";
import { ContactUs } from "../pages/Contact";


const MainRouter = () => {

const [loading, setLoading] = useState(true);
const [showBar, setSideBar] = useState(false)
const location = useLocation()

const SideBar = () => {
  setSideBar(prev => !prev)
};


 useEffect(() => {
  setTimeout(() => {
    setLoading(false)
  }, 2000)
 }, [])

 if(loading){
   return(
    <Loader />
   )
 }

    return(
        <div className="font-poppins">
        {showBar && <Sidebar SideBar={SideBar}/>}
         {!location.pathname.startsWith('/employerspage') &&   <Header SideBar={SideBar}/>}
          <Routes>
            <Route path='/' element={<Home /> }/>   
            <Route path='/aboutus' element={<AboutUs /> }/> 
            <Route path='/services' element={<Services /> }/>
            <Route path='/contactus' element={<ContactUs /> }/>     
            <Route path='/signin' element={<SignIn /> }/>          
            <Route path='/signup' element={<SignUp /> }/>              
            <Route path='/employerspage' element={<EmployersPage /> }/>           
          </Routes>  
          <Footer />
        </div>
    )
}

export default MainRouter;