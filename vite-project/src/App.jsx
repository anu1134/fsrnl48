import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

/**
 * Header
 *  Navigation Bar
 * Body
 *  Filtering --- Search and Top Rated Restaurants
 *  Restaurant Card
 * Footer
 */

function App() {
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer />
    </> 
  )
}


export default App
