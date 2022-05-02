import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Active from './components/Active/Active';
import Completed from './components/Completed/Completed';
import Main from './components/Main/Main';
import All from './components/All/All';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Main />
        <Routes>
          <Route path='/' element={<All />} />
          <Route path='/active' element={<Active />} />
          <Route path='/completed' element={<Completed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
