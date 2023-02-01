import { useRouter } from 'next/router';
import React ,{useEffect}from 'react'
import { useStateContext } from '../../context/StateContext'


const ProtectedRoute = ({children}) => {
    const {user} = useStateContext();
    const router = useRouter();

    useEffect(() => {
      if(!user)
      {
        router.push('/Login')
      }
    }, [router, user])
     
  return <>
  {user ? children : null}
  </>
}

export default ProtectedRoute