import React from 'react'
import { useParams } from 'react-router-dom'

export default function Contact() {
    const param = useParams()


  return (
    <div>
        <h2>Contact</h2>
        <h4>{param.name}</h4>
        

      
    </div>
  )
}
