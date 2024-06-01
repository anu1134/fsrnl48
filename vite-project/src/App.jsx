import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import userContext from './utils/userContext';
import { useState } from 'react';

/**
 * Header
 *  Navigation Bar
 * Body
 *  Filtering --- Search and Top Rated Restaurants
 *  Restaurant Card
 * Footer
 */

function App() {
  const [userName, setUserName] = useState("John");

  return(
    <userContext.Provider value={{currentUser: userName, setUserName}}>
      <Header/>
      <Outlet/>
      <Footer />
    </userContext.Provider> 
  )
}


export default App
