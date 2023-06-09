import React from 'react';
import SlickerTeam from './SlickerTeam';
import SlickerProduct from './SlickerProduct';

type ResponsiveType ={
  breakpoint:number,
  settings:SlickesComponentProps,
}

export type SlickesComponentProps = {
  alt?:string,
  arrows?:boolean,
  className?: string,
  dots?:boolean,
  fade?:boolean,
  height?: string,
  images?:string[],
  infinite?: boolean,
  nextArrow?: JSX.Element,
  prevArrow?: JSX.Element,
  slidesToScroll?: number,
  slidesToShow?: number,
  swipeToSlide?:boolean,
  speed?:number,
  width?:string, 
  initialSlide?: number,
  autoplay?: boolean,
  responsive?:ResponsiveType[],
}




const Slickes:React.FC = () => {



 const settingsByTeam:SlickesComponentProps  ={
  dots: true,
  infinite: true,
  speed: 2600,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  arrows: false,
  autoplay: true  ,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        dots:false,
        arrows:false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        arrows:false,
      },
    },
  ],
}
 const settingsByProduct:SlickesComponentProps  ={
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  arrows: false,
  autoplay: true  ,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        dots:false,
        arrows:false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        arrows:false,
      },
    },
  ],
}


  return (
    
    <div className='slicers'>
    <SlickerProduct settings={settingsByProduct} />
    <SlickerTeam settings={settingsByTeam} />
  </div>
  )
}

export default Slickes 






