import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../page/About'
import AddVehicle from '../page/AddVehicle'
import Testimonila from '../page/Testimonial'
import Contact from '../page/Contact'
import Home from '../Home'
import ExploreVehicle from '../page/ExploreVehicle'
import Gallery from '../page/Gallery'
import Login from '../Login'
import Admin from '../AdminPanel/Admin'


function Router() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/testimonial' element={<Testimonila/>}/>
            <Route path='/contact' element={<Contact/>}/>
            {/* <Route path='/explore-Vehicle' element={<ExploreVehicle/>}/> */}
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default Router