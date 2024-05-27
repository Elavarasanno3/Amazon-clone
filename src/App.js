import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/script/Header';
import SecondHeader from './components/script/SecondHeader';
import Home from './components/script/Home';
import Details from './components/script/Details';
import Cart from './components/script/Cart';
import SignIn from './components/script/SignIn';
import CreateAccount from './components/script/CreateAccount';
import AddProduct from './components/script/AddProduct'

const AppContent = () => {
  const location = useLocation();
  const showHeaders = location.pathname !== '/signin' && location.pathname !== '/createaccount' && location.pathname !== '/addproduct';

  return (
    <div className="app">
      {showHeaders && <Header />}
      {showHeaders && <SecondHeader />}
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
