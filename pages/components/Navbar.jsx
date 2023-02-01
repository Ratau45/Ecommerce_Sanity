import React from 'react';
import Link from 'next/link';

import {AiOutlineShopping} from 'react-icons/ai';
import {Cart} from './';
import { useStateContext } from '../../context/StateContext';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useRouter } from 'next/router'


const NavbarMain = () => {
    const router = useRouter();
    const {ShowCart, setShowCart, totalQuantities,user,logout} = useStateContext();

  return (
//     <div className='navbar-container'>
//       <p className='logo'>
//         <Link href="/">KS Store</Link>
//       </p>
// {/* <p> <Link href="/cases">cases</Link></p> */}
// <div className='navbar-right'>
// <Nav className="me-auto">
//             {user ? (
//               <div>
//                 <Nav.Link
//                   onClick={() => {
//                     logout()
//                     router.push('/')
//                   }}
//                 >
//                   Logout
//                 </Nav.Link>
//               </div>
//             ) : (
//               <>
//                 <Link href="/signup" passHref>
//                   <Nav.Link>Signup</Nav.Link>
//                 </Link>
//                 <Link href="/login" passHref>
//                   <Nav.Link>Login</Nav.Link>
//                 </Link>
//               </>
//             )}
//           </Nav>
// </div>
//       <button type="button" className="cart-icon" onClick={()=> setShowCart(true)} >
//         <AiOutlineShopping/>
//         <span className='cart-item-qty'>{totalQuantities}</span>
//       </button>

//       {ShowCart && <Cart/>}
//     </div>
//   )

/////

<Navbar bg="grey" expand="lg">
<Container>
  <Link href="/" passHref>
    <Navbar.Brand>NextJS Firebase Auth</Navbar.Brand>
  </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className='ml-auto'>
    {user ? (<>
      <Link href="/cases" passHref>
            <Nav.Link >Cases</Nav.Link>
          </Link>
          <Link href="/GraphicCards" passHref>
            <Nav.Link >Graphics Card</Nav.Link>
          </Link>
    </>) : null}
    </Nav>
    <Nav className="ms-auto">
    
    {user ? (
        <div >
          <Nav.Link
            onClick={() => {
              logout()
              router.push('/')
            }}
          >
            Logout
          </Nav.Link>
        </div>
      ) : (
        <>
          <Link href="/Signup" passHref>
            <Nav.Link >Signup</Nav.Link>
          </Link>
          <Link href="/Login" passHref>
            <Nav.Link>Login</Nav.Link>
          </Link>
        </>
      )}
     
      
    </Nav>
 
   
      
    <button type="button" className="cart-icon" onClick={()=> setShowCart(true)} >
        <AiOutlineShopping/>
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
     
      {ShowCart && <Cart/>}
     
  </Navbar.Collapse>
  
</Container>
</Navbar>


  )
}

export default NavbarMain


