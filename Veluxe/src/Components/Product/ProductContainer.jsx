import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart'

export default function ProductContainer() {
  const [products,setProduct]=useState([])
  useEffect(()=>{
    fetch('/data.json')
    .then(res=>res.json())
    .then(data=>{
      setProduct(data)
      // console.log(data)
    })
  },[])
  console.log('product',products)
  return (
    <div>
      <h1 className='text-4xl mx-auto text-center py-4 font-bold font-poppins'>Browse All Product</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center my-4 gap-4'>{
    // products?.map((product)=><ProductCart data={product}></ProductCart>)    
    products?.map((product)=><ProductCart data={product}></ProductCart>)    
    }</div>
    </div>
  )
}
