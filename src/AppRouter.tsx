import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = lazy(() => import('./App'));
const Cart = lazy(() => import('./components/Cart'));
const About = lazy(() => import('./components/About'));

const AppRouter: React.FC = () => (
  <Router>
    <Navbar />
    <Suspense fallback={<div style={{textAlign:'center',marginTop:'5rem'}}>Loading...</div>}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRouter;
