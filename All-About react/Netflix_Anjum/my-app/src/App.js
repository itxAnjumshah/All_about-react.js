import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home/Home.jsx";
import Login from "../src/Pages/Login/Login.jsx"
import Player from './Pages/Players/Player.jsx';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './Firebase.jsx';

function App() {
const navigate = useNavigate();

useEffect(()=>{
  onAuthStateChanged(auth,async (user)=>{
if (user) {
  console.log("logged in");
  navigate('/')
}
else{
  console.log("Logged out")
  navigate('/login')
}
  })
},[])

  return (
    <>
    <ToastContainer theme='dark' />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Player/:id' element={<Player/>}/>

    </Routes>
   
      
    </>
  );
}

export default App;
