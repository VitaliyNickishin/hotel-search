import React from 'react'
import './Hero.sass'

export default function Hero({hero, children}) {
 return (
  <header className={hero}>
   {children}
  </header>
 )
}

Hero.defaultProps = {
 hero: 'defaultHero'
}