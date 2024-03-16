import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './component/login/Signup';
import Home from './component/main/Home';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
