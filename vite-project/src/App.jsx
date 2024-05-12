import './App.css'
// import  Button from './components/button'
// import Profile from './components/profile'
import Form from './components/form';
// import { useState } from "react";

function App() {

  //const [count, setCount] = useState(0); 

  // function handleClick() {
  //   console.log("Button Clicked");
  //   setCount(count + 1);
  //   console.log(count);
  // }

  // const properties = {
  //   click: handleClick,
  //   count: count
  // }

  return (
    <>
      <h1>Learning Functional Components</h1>
      {/* <Button properties={properties}/>
      <Button properties={properties} />
      <Profile/> */}
      <Form/>
    </> 
  )
  
}

export default App
