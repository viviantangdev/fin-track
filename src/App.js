import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import Dashboard from './pages/Dashboard/Dashboard';
import Transactions from './pages/Transactions';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/transactions' element={<Transactions/>} />
        <Route path='/settings' element={<Settings/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
