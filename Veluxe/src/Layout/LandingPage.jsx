import React from 'react'
import NavUser from '../Components/NavUser'
import Banner from '../Components/Banner'

export default function LandingPage() {
  return (
    <div>
      <header><NavUser></NavUser></header>
      <section className='w-11/12 mx-auto mt-24'>
      <Banner></Banner>
      </section>
    </div>
  )
}
