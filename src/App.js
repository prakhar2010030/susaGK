import './App.css';
import Navbar from "./Components/Navbar"
import {BrowserRouter,Routes,Route}from "react-router-dom"
import Details from './pages/userDetails/Details';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import ExtraDetails from './pages/ExtraDetails/ExtraDetails';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/details' element={<ExtraDetails/>}/>
      <Route path='/user' element={<Details/>}/>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
