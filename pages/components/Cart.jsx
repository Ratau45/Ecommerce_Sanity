import React, {useRef} from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useStateContext } from '../../context/StateContext';
import {TiDeleteOutline} from 'react-icons/ti';
import {urlFor} from './Lib/client';
import getStripe from './Lib/getStripe';
import Image from 'next/image'

const Cart = () => {
  const cartRef = useRef();
      
  const {onRemove,totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuality } = useStateContext();
   
  const handleCheckout = async ()=>{
    const stripe = await getStripe();
    
    const response = await fetch('/api/stripe',{
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body : JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) 
    return;
    
    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({sessionId: data.id})
  };

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button
        type='button'
        className='cart-heading'
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft/>
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'> ({totalQuantities} items)
          </span>
        </button>
        {/* displaying that if cart is empty */}
        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={140}/>
            <h3>Your Shopping Bag Is Empty</h3>
            <Link href="/">
              <button
                type='button'
                onClick={()=> setShowCart(false)}
                className="btn">
                  Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className='product-container'>
           {cartItems.length >= 1 && cartItems.map((item) =>
           <div className='product' key={item._id}>
            <Image src={urlFor(item?.image[0])}
            className="cart-product-image"
            alt="Failed To Upload Picture" />
            <div className='item-desc'>
              <div className='flex top'>
                <h5>{item.name}</h5>
                <h4>R{item.price}</h4>
              </div>
              <div className='flex bottom'>
                <div>
                <p className='quantity-desc'>
          <span className='minus' onClick={(() => toggleCartItemQuality(item._id,'dec'))}><AiOutlineMinus/></span>
          <span className='num' >{item.quantity}</span>
          <span className='plus' onClick={() => toggleCartItemQuality(item._id,'inc')}><AiOutlinePlus/></span>
          </p>
          </div>
          <button
            type='button'
            className='remove-item'
            onClick={(() =>onRemove(item))}>
              <TiDeleteOutline/>
              </button>     
              </div>
            </div>
           </div>
           )}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className='total'>
              <h3>Subtotal:</h3>
              <h3>R{totalPrice}</h3>
            </div>
            <div className='btn-container'>
              <button type='button' className='btn' onClick={handleCheckout}>
                Pay With Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart   