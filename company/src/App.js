
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Updation from './components/Updation';
import Creation from './components/Creation';
import Department from './components/Department';
import Nav from './components/Nav'
import DepartmentCreate from './components/DepartmentCreate';

function App() {
  return (
   <BrowserRouter>
    <Nav></Nav>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/employee-update/:id' element={<Updation />} ></Route>
        <Route path='/employee-create' element={<Creation />}></Route>
        <Route path='/department' element={<Department />}> </Route>
        <Route path='/create-Department' element={<DepartmentCreate />}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
