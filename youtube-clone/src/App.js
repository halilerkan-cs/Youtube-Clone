import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Originals from './pages/Originals';
import Shorts from './pages/Shorts';
import Subscriptions from './pages/Subscriptions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shorts" element={<Shorts />}></Route>
        <Route path="/subscriptions" element={<Subscriptions />}></Route>
        <Route path="/originals" element={<Originals />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
