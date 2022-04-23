import logo from './logo.svg';
import './App.css';
import All from './components/All/All';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/all' element={<All />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
