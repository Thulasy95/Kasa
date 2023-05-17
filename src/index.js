/*------------------------------------ Ce fichier permet d'initialiser l'app React, et le greffer au HTML. ---------------------------------------- */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home'; //1er composant (App.js transformé en Home.js)
import APropos from './pages/APropos/APropos';
import Logement from './pages/Logement/Logement';
import Error from './pages/Error/Error'
import Footer from './components/Footer';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to="/Home" replace={true}/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/APropos' element={<APropos/>} />
        <Route path='/Logement/:id' element={<Logement/>} />
        <Route path='/Error404' element={<Error/>} />
        <Route path='*' element={<Navigate to="/Error404" replace={true}/>} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
