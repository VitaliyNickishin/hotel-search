import React from 'react'
import './Banner.sass'

export default function Banner({children, title, subtitle}) {
 return (
  <div className="banner">
   <h1>{title}</h1>
   <span></span>
   <p>{subtitle}</p>
   {children}
  </div>
 )
}
