import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import { myContext } from './Context';


function App() {
  const userObject = useContext(myContext);
  console.log(userObject);
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Homepage/> } />
        <Route path='/login' element={ <Login/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App
