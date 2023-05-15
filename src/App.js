import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import NigerianFood from './pages/NigerianFood';
import ForeignFood from './pages/ForeignFood';
import MenuList from './pages/MenuList';
import SignIn from './pages/Sign-in';
import './App.css'


const App = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
    <div className='body' >
      <Header />
      {!isAuth && <SignIn />}
      {isAuth && <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/local' element={<NigerianFood />} />
        <Route path='/foreign' element={<ForeignFood />} />
        <Route path='/menu' element ={<MenuList/>}/>
      </Routes>}
      <Footer />
    </div>

  )
}

export default App;
