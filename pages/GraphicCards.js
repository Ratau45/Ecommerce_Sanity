import React from 'react'
import {client} from './components/Lib/client';
import { Product } from './components/index';

const GraphicCards = ({products}) => {
  return (
    <>
    <div className='products-container'>
    {products?.map(
      (product, i)=> <Product key={product.id} product={product}/>)}
  </div>
  </>
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "gpus"]';
    const products = await client.fetch(query);
    
    return{
      props: {products}
    }
  
  }

export default GraphicCards