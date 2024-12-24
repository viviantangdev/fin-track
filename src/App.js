import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Dashboard from './pages/Dashboard';
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
