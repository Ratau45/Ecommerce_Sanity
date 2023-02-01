import React from 'react'
import Link from 'next/link'
import { urlFor } from './Lib/client'



const Product = ({product: {name, image, price, slug}}) => {
  return (
    // <div>
    //   <Link href={`/product/${slug.current}`}>
    //     <div className='glassBox'>
    //       <img
    //        src={urlFor(image && image[0])}
    //        width={250}
    //        height={250} 
    //        className='glassBox_imgBox'
    //       />
    //       <div className='glassBox_content' >{name}</div>
    //       <p className='product-price'>R{price}</p>

    //     </div>
    //   </Link>
    // </div>
<Link href={`/product/${slug.current}`}>
    <div class="card">
    <div class="image">
      <img src={urlFor(image && image[0])}/>
    </div>
    <div class="details">
      <div class="center">
        <h1>R{price}<br/><span>team leader</span></h1>
        <p>{name}</p>
        <ul>
          <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
 </Link>
  )
}

export default Product