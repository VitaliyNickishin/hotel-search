import React from 'react'
import Hero from '../components/Hero/Hero'
import Banner from '../components/Banner/Banner'
import SearchHotel from '../components/SearchHotel/SearchHotel'

export default function Home() {
 return (
  <div>
   <Hero>
    <Banner
     title="I'd like to go to"
    >
     <SearchHotel/>
    </Banner>
   </Hero>
  </div>
 )
}
