import React from 'react'
import banner1  from "../../Images/Banner/banner1.jpg"
import banner2 from "../../Images/Banner/banner2.jpg"
import banner3 from "../../Images/Banner/banner3.jpg"
import banner4 from "../../Images/Banner/banner4.jpg"
import banner5 from "../../Images/Banner/banner5.jpg"
import banner6 from "../../Images/Banner/banner6.jpg"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SlideShow = () => {
  return (<Carousel autoPlay={true} infiniteLoop interval={1000} showThumbs={false}>
  <div>
      <img src={banner1} alt=''/>
  </div>
  <div>
      <img src={banner2} alt=''/>
  </div>
  <div>
      <img src={banner3} alt=''/>
  </div>
  <div>
      <img src={banner4} alt=''/>
  </div>
  <div>
      <img src={banner5} alt=''/>
  </div>
  <div>
      <img src={banner6} alt=''/>
  </div>
</Carousel>)
}

export default SlideShow