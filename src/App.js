
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Brands from './components/Brands';
import Menu from './components/Menu';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <div className="App" style={{background: '#F4F3F1'}}>
      <BrowserRouter>
        <Menu count={count}/>
        <Routes>
          <Route exact path="/" element={<Brands Click={handleClick}/>} />
          <Route exact path="page1" element={<Brands />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
