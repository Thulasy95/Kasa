import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import APropos from './pages/APropos/APropos';
import FicheLogement from './pages/FicheLogement/FicheLogement';
import Error from './pages/Error/Error'
import Footer from './components/Footer';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/APropos' element={<APropos/>} />
        <Route path='/FicheLogement' element={<FicheLogement/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
