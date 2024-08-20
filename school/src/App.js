
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NewStud from './components/NewStud';
import UpdateStud from './components/UpdateStud';
import Branch from './components/Branch';
import UpdateBranch from './components/UpdateBranch'
import NewBranch from './components/NewBranch';
import Nav from './components/Nav';
function App() {
  return (
    
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Addmission' element={<NewStud />}></Route>
        <Route path='/Updation/:id' element={<UpdateStud />}></Route>
        <Route path='/branches' element={<Branch />}></Route>
        <Route path='/Updation-Branch/:id' element={<UpdateBranch />}></Route>
        <Route path='/new-Branch/' element={<NewBranch />}></Route>

      </Routes>

      </BrowserRouter>
    

    
  );
}

export default App;

 
