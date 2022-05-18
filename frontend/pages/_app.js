import '../styles/globals.css'
import Navbar from '../Component/Navbar'
function MyApp({ Component, pageProps }) {
  
  return <><Navbar/><Component {...pageProps} /></>
}

export default MyApp
