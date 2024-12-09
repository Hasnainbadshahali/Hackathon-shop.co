import React from 'react'
import Navbar from './component/navbar'
import Hero from './component/Hero'
import Selling from './component/selling'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Selling/>
    </div>
    
  )
}
