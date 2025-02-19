import React from 'react'
import LayOut from '../../Components/LayOut/LayOut';
import {Carousel}  from 'react-responsive-carousel';
import CarouselEffect from '../../Components/Carousel/Carousel';
import Category from '../../Components/Category/Category';
import Product from '../../Components/Product/Product';

const Landing = () => {
  return (
    <LayOut>
      <Carousel/>
      <CarouselEffect/>
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing