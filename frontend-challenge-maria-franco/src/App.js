import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Converter from './pages/context/Converter';
import Tickers from './pages/Tickers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Converter/>} />
        <Route path="/tickers" element={<Tickers/>} />
      </Routes>
    </Router>
  );
}

export default App;