import React from 'react'
import {client} from './components/Lib/client';
import { Product, Carousel } from './components/index';
import background from '../public/pexels-alexander-ant-7004739.jpg';
const cases = ({products}) => {
  const myStyle={
   // backgroundImage: "url( 'https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp')"
   //backgroundColor: "#94ab87"
 };

  return (
    <div  >
      <div className='carousel'>
        <Carousel/>
      </div>
      
   

    <div className='products-container' >
    
    {products?.map(
      (product, i)=> <Product key={product.id} product={product}/>)}
  </div>
  </div>
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "cases"]';
    const products = await client.fetch(query);
    
    return{
      props: {products}
    }
  
  }
export default cases