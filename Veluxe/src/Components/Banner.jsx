import React from "react";

export default function Banner() {
  return (
    <div className="carousel w-full h-[400px] text-white">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="grid md:grid-cols-12 items-center justify-between bg-[#71a5cd] w-full p-10">
          <div className=" col-span-8 md:ml-20">
            <h1 className="text-white text-2xl md:text-4xl font-bold">
              This Best Electronics Shop for Online Purchase
            </h1>
            <p className="text-xs md:text-sm py-3">
              Discover reliable laptops with unbeatable performance and sleek
              designs, perfect for all your needs.Experience premium quality
              laptops designed for durability and peak performance.
            </p>
            <button className="bg-blue-600 p-4  px-6 my-2"> Shop Now</button>
          </div>
          <div className="hidden md:block col-span-4">
            <img
              className=" w-[250px] md:w-[500px] h-[300px] object-contain"
              src="https://media.gettyimages.com/id/1714379361/photo/laptop-in-studio-mock-up-shot.jpg?s=612x612&w=0&k=20&c=MWtN1S6WT8zWADJtdUyDYiJ5FOYeWqUt5Kp5y5VUKxc="
              alt=""
            />
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
      <div className="grid md:grid-cols-12 items-center justify-between bg-[#71a5cd] w-full p-10">
          <div className=" col-span-8 md:ml-20">
            <h1 className="text-white text-2xl md:text-4xl font-bold">
              This Best Electronics Shop for Online Purchase
            </h1>
            <p className="text-xs md:text-sm py-3">
              Discover reliable laptops with unbeatable performance and sleek
              designs, perfect for all your needs.Experience premium quality
              laptops designed for durability and peak performance.
            </p>
            <button className="bg-blue-600 p-4  px-6 my-2"> Shop Now</button>
          </div>
          <div className="hidden md:block col-span-4">
            <img
              className=" w-[250px] md:w-[500px] h-[300px] object-contain"
              src="https://c1.neweggimages.com/productimage/nb300/ACBWD2403151A0T8C3E.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
      <div className="grid md:grid-cols-12 items-center justify-between bg-[#71a5cd] w-full p-10">
          <div className=" col-span-8 md:ml-20">
            <h1 className="text-white text-2xl md:text-4xl font-bold">
              This Best Electronics Shop for Online Purchase
            </h1>
            <p className="text-xs md:text-sm py-3">
              Discover reliable laptops with unbeatable performance and sleek
              designs, perfect for all your needs.Experience premium quality
              laptops designed for durability and peak performance.
            </p>
            <button className="bg-blue-600 p-4  px-6 my-2"> Shop Now</button>
          </div>
          <div className="hidden md:block col-span-4">
            <img
              className=" w-[250px] md:w-[500px] h-[300px] object-contain"
              src="https://media.istockphoto.com/id/1370871192/photo/happy-woman-shows-blank-smartphone-screen-against-blue-background.jpg?s=612x612&w=0&k=20&c=ICucU4i1_xfW8kx2JFGD7LmEsepyNbIA-zab9B4CRtM="
              alt=""
            />
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
      <div className="grid md:grid-cols-12 items-center justify-between bg-[#71a5cd] w-full p-10">
          <div className=" col-span-8 md:ml-20">
            <h1 className="text-white text-2xl md:text-4xl font-bold">
              This Best Electronics Shop for Online Purchase
            </h1>
            <p className="text-xs md:text-sm py-3">
              Discover reliable laptops with unbeatable performance and sleek
              designs, perfect for all your needs.Experience premium quality
              laptops designed for durability and peak performance.
            </p>
            <button className="bg-blue-600 p-4  px-6 my-2"> Shop Now</button>
          </div>
          <div className="hidden md:block col-span-4">
            <img
              className=" w-[250px] md:w-[500px] h-[300px] object-contain"
              src="https://cdn.mos.cms.futurecdn.net/FkGweMeB7hdPgaSFQdgsfj-320-80.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
