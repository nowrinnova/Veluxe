import React from 'react'
import NavUser from '../Components/NavUser'
import Banner from '../Components/Banner'
import ProductContainer from '../Components/Product/ProductContainer'
import Footer from '../Components/Footer'

export default function LandingPage() {
  return (
    <div>
      <header><NavUser></NavUser></header>
      <section className='w-11/12 mx-auto mt-24'>
      <Banner></Banner>
      </section>
      <section className='w-11/12 mx-auto mt-2'>
      <ProductContainer></ProductContainer>
      </section>
      <footer><Footer></Footer></footer>
    </div>
  )
}
