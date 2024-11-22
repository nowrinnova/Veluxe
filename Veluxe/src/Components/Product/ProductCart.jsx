import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
export default function ProductCart({data}) {
  // console.log(data)
  const { type,image,category,name ,inStock ,price,quantity,rating ,description}=data
  return (
    <div className="card bg-base-100 shadow-xl my-5">
    <figure className="px-5 pt-5">
      <img
        src={image}
        alt="Shoes"
        className="rounded-xl h-[200px]" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title text-blue-600">{name}</h2>
      <div>
      <div className="overflow-x-auto">
  <table className="table">
    <tbody>
      {/* row 1 */}
      <tr>
    
        <td className='font-semibold'>Price:</td>
        <td>${price}</td>
        
      </tr>
      {/* row 2 */}
      <tr>
   
        <td className='font-semibold'>Stock:</td>
        <td>{inStock ? <p className='text-green-700 font-semibold'>Available </p>: <p className='text-red-500 font-semibold'>Available </p>}</td>
        
      </tr>
      <tr>
   
        <td className='font-semibold'>Rating:</td>
        <td>{rating} ⭐⭐⭐⭐</td>
        
      </tr>
   
      
    </tbody>
  </table>
</div>
      </div>
      <div className='divider'></div>
      <div className="card-actions  flex justify-between items-center gap-4">
        {/* <button className="btn bg-[#71a5cd] text-white">Buy Now</button> */}
        <div>
          <button className='text-2xl text-blue-600 hover:text-[#71a5cd] font-bold'><IoCartOutline /></button>
        </div>
        <div>
          <button  className='text-xl text-blue-600  hover:text-[#71a5cd] font-bold'><FaRegHeart /></button>
        </div>
        <div>
          <button className='p-2 border border-blue-600 rounded-lg text-sm'>details</button>
        </div>
      </div>
    </div>
  </div>
  )
}
