import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/login/Login'; 
import Signup from './component/login/Signup';

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
