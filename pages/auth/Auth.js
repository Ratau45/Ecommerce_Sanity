import React, { useState } from "react"
import Signup from "./Signup";
import Login from "./Login";


const Auth = ()=> {

  let [authMode, setAuthMode] = useState("signup")
  const changeAuthMode = () => { setAuthMode(authMode === "signin" ? "signup" : "signin")}

  if (authMode === "signin") {
    return (
     <Login changeAuthMode={changeAuthMode}/>
    )
  }

  return (
   <Signup changeAuthMode={changeAuthMode}/>
  )
}
 
export default Auth;