import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import "./index.css"
import Loading from './Loading';
import { useState } from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){
  const [users, setusers] = useState([
    {
        username: "bala",
        password: "123"
    }
])
  return(
    <div>
 <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
    <Route path='/Signup' element={<Signup users={users} setusers={setusers}/>}></Route>
    <Route path='/loading' element={<Loading/>}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  )
}


root.render (<App/>);


