
import Header from "./components/Header"
import TechWorld from "./components/TechWorld"
import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import ServiceLayout from "./components/Services/ServiceLayout"






export default function App() {
  return (
    <main className="mx-auto">
      
    {/* background */}

    <Header/>
    
    <ServiceLayout/>
    
    </main>
  )
}