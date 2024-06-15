import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import userContext from './utils/userContext';
import { useState } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

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
    <Provider store={appStore}>
       <userContext.Provider value={{currentUser: userName, setUserName}}>
        <Header/>
        <Outlet/>
        <Footer />
      </userContext.Provider> 
    </Provider>
   
  )
}


export default App
