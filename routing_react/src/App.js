
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quote from './components/Quote';
import QR from './components/QR';
import Joke from './components/Joke';
import CountryGuide from './components/CountryGuid';
import Nav from './components/Nav';



export default function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path='/' element={<CountryGuide/>}/>
          <Route path='/joke' element={<Joke />}/> 
          <Route path='/qr' element={<QR />}/> 
          <Route path='/quote' element={<Quote />}/> 
          
        </Routes>
   </BrowserRouter>
  );
}

