import React from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom" ;
import Home from "./components/home"
import About from "./components/about"
import Contacts from "./components/contacts"


function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path='/' element={<h1> welcome to the main page </h1>} />
    <Route path="/home" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contacts" element={<Contacts />} />
    </Routes>
    </BrowserRouter>
   
  )
}

export default App