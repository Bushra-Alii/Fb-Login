import './App.css';
import Login from './Components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Password from './Components/Password';
import Navbar from './Components/Navbar';


function App() {

  return (
    <div>
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route exact path="/Navbar" element={<Navbar />}></Route>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/password" element={<Password />}></Route>
          </Routes>
        </div>

      </BrowserRouter>

    </div>




  );
}

export default App;
