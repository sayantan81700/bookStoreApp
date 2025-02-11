import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from '../../public/list.json';
import Cards from './Cards';

function Freebook() {
  const filterData=list.filter((Data)=>Data.catagori==='free');
  
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <><div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>

<div>
<h1 className='font-bold pb-7 pt-10 text-2xl'>Free offerrd courses</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla non suscipit, iure neque earum?</p>
    
</div>
<div className="slider-container">
      <Slider {...settings}>
        {
          filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
          ))
        }
       
      </Slider>
    </div>
    
    </div>

    </>
  )
}

export default Freebook
