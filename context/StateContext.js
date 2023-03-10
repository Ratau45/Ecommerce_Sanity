import React, {createContext, useContext,useState,useEffect} from 'react';
import { toast } from 'react-hot-toast';
import {auth} from '../pages/components/Lib/Firebase/firebase'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,} from 'firebase/auth';
import firebase from 'firebase/app'
import { async } from '@firebase/util';
import { doc, setDoc } from "firebase/firestore"; 


const context = createContext();


export const StateContext =({children}) =>{
   const [user, setUser] = useState(null);
   const [loading,setloading]= useState(true)
   const [ShowCart, setShowCart] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [totalPrice, settotalPrice] = useState(0);
   const [totalQuantities, settotalQuantities] = useState(0);
   const [qty, setqty] = useState(1);
   let foundProduct;
   let index;

   // login using firebase
   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) =>{
        if(user)
        {
            setUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName
               
            })
        } else
        {
            setUser(null)
        }
        setloading(false)
     })
     return () => unsubscribe()
   }, [])

   //signup
//    try {
//     const Credentials = await createUserWithEmailAndPassword(auth, email, password);
//     const user = Credentials.user;
//     firebase.firestore().collection("Users").doc(auth().currentUser.uid)
//         .set({ firstName, lastName, email })
//        // .then(this.checkStatus({ user }));
// } catch (error) {
//     console.log("eix",error.code);
//     if (error.code == "auth/email-already-in-use") {
//         new Alert("user already exists.");
//     }
// }

// }

   const signup =  (email,password) =>{
    try { loading ? null :
     createUserWithEmailAndPassword(auth, email, password)
           //.then(()=>{
            //setDoc(doc(db, "Users", user.uid), firstName, lastName, email)
            //firebase.firestore().collection("Users").doc(user.uid)
           //.set({ firstName, lastName, email })
           console.log("success")
           } catch (error) {
                 console.log("eix",error.code);
                 if (error.code == "auth/email-already-in-use") {
                     alert("user already exists.");
                 }
                }
         

   }
   //login
   const login = (email, password) =>{
    try {
        signInWithEmailAndPassword(auth, email,password)
        console.log("success  login")   
    } catch (error) {
        alert("Unable to Login")
        console.log(error.code)
    }
    
   }
   //logout
   const logout = async () =>{
    setUser(null)
    await signOut(auth)
   }

// adding quantity and product to cart
    const onAdd = (product, quantity) => {
        
        //checking if the product is already in the cart
        const checkProductInCart = cartItems.find((item) => item._id == product._id);
        settotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        settotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

        if(checkProductInCart){
            //update the quantity if the product already exists in the cart or else add it to the cart if its new
            const updateCartItems = cartItems.map((cartProduct) =>{
                if(cartProduct._id === product._id)
                {
                    return{...cartProduct, quantity: cartProduct.quantity + quantity}
                }
            })
            setCartItems(updateCartItems);
           
        } else{
            product.quantity = quantity;
            setCartItems([...cartItems,{...product}]);
        }
        // response 
         toast.success(`${qty} ${product.name} added to the cart.`)
    }

    //removing product from the cart
    const onRemove = (product) =>{
        foundProduct = cartItems.find((item) => item._id === product._id)
        const newCartItems = cartItems.filter((item)=> item._id !==product._id)

        settotalPrice((prevTotalPrice)=> prevTotalPrice - foundProduct.price * foundProduct.quantity);
        settotalQuantities(prevTotalQuantities => prevTotalQuantities = foundProduct.quantity);
        setCartItems(newCartItems);
    }
    // updating the cart quantity and total price on the cart container...ai this is bit complicated
    //but try to understand it 
     const toggleCartItemQuality =(id, value) => {
        foundProduct = cartItems.find((item) => item._id === id)
        index = cartItems.findIndex((product) => product._id === id);
        const newCartItems = cartItems.filter((item)=> item._id !==id)
        
        if(value === 'inc')
        {
            setCartItems([...newCartItems, {...foundProduct,quantity: foundProduct.quantity +1}]);
            settotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            settotalQuantities((prevTotalQuantities) => prevTotalQuantities +1)
        } else if(value ==='dec')
        {
            if(foundProduct.quantity > 1){
            setCartItems([...newCartItems, {...foundProduct,quantity: foundProduct.quantity - 1}]);
            settotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
            settotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
            }
        }


     }

   //creating quantity function increase and decrease
    const incQty = () => {
    setqty((prevQty) => prevQty + 1);
   }

    const decQty = () => {
    setqty((prevQty) => {
        if(prevQty -1 < 1)
        {
            return 1;
        }
    return prevQty -1;
    })
   }

   return(
    <context.Provider value={{
        user,
        loading: true,
        ShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        login,
        signup,
        logout,
        setShowCart,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuality,
        onRemove,
        setCartItems,
        settotalPrice,
        settotalQuantities
    }}>
        {children}

    </context.Provider>
   )
}   

export const useStateContext = () => useContext (context);