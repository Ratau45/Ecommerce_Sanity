import React from 'react'
import Link from 'next/link'
import { urlFor } from './Lib/client'
import Image from 'next/image'

const CardList = ({product: {name, image, price, slug}}) => {
  return (
    <div>
    <Link href={`/product/${slug.current}`}>
      <div className='product-card'>
        <Image
         src={urlFor(image && image[0])}
         width={250}
         height={250} 
         className='product-image'
         alt="Picture could not upload"
        />
        <p className='product-name'>{name}</p>
        <p className='product-price'>R{price}</p>

      </div>


      <div className="card" key={item.id}>
            <div className="card_img">
                <Image src={urlFor(image && image[0])} 
                alt="Picture could not upload"
                />
            </div>
            <div className="card_header">
                <h2>{name}</h2>
               
                <p className="price">{price}<span>R</span></p>
                <div className="btn">Add to cart</div>
            </div>
        </div>
    </Link>
  </div>
  )
}

export default CardList