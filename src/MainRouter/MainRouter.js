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
import { Recruitement } from "../pages/Recruitement";
import { Checks } from "../pages/Checks";
import { HR } from "../pages/HR";
import { CV } from "../pages/CV";
import { Business } from "../pages/Business";
import { Outsourcing } from "../pages/Outsourcing";


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
        <div className="font-Qwitcher">
        {showBar && <Sidebar SideBar={SideBar}/>}
         {!location.pathname.startsWith('/employerspage') &&   <Header SideBar={SideBar}/>}
          <Routes>
            <Route path='/' element={<Home /> }/>   
            <Route path='/aboutus' element={<AboutUs /> }/> 
            <Route path='/services' element={<Services /> }/>
            <Route path='/contactus' element={<ContactUs /> }/>    
            <Route path='/recruitement' element={<Recruitement /> }/> 
            <Route path='/checks' element={<Checks /> }/> 
            <Route path='/hr' element={<HR /> }/> 
            <Route path='/cv' element={<CV /> }/> 
            <Route path='/business' element={<Business /> }/> 
            <Route path='/outsourcing' element={<Outsourcing /> }/>  
            <Route path='/signin' element={<SignIn /> }/>          
            <Route path='/signup' element={<SignUp /> }/>              
            <Route path='/employerspage' element={<EmployersPage /> }/>           
          </Routes>  
          <Footer />
        </div>
    )
}

export default MainRouter;