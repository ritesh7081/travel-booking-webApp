import React from 'react'
import Home1 from './Home/Home1'
import Home2 from './Home/Home2'
import Home3 from './Home/Home3'
import Home4 from './Home/Home4'
import VehicleBookingForm from './VihicalBookingForm'
import TestimonialsSection from './Testimonial'

function Home() {
  return (
    <div>
        <Home1/>
        {/* <VehicleBookingForm/> */}
        <Home2/>
        <Home3/>
        <Home4/>
        <TestimonialsSection/>
    </div>
  )
}

export default Home