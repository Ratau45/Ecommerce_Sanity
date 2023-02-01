import { Layout } from './components'
import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/globals.css'
import {StateContext} from '../context/StateContext';
import {Toaster} from 'react-hot-toast'; 
import { useRouter } from 'next/router';
import ProtectedRoute from './components/ProtectedRoute';
//more like index.js in reactjs where components are being rendered and 
//delivered as root

const noAuthRequired = ['/','/Login','/Signup']
function MyApp({ Component, pageProps }) {
const router = useRouter();

  return (
    <StateContext>
    <Layout>
      <Toaster/>
      {noAuthRequired.includes(router.pathname)?(
        <Component {...pageProps} />
      ) :(
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
  
    </Layout>
    </StateContext>
)}

export default MyApp
