import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ExerciceDetail from './pages/ExerciseDetail';
import Footer from './components/Footer/Footer';


const App = () => {


  return (
    <>
    <Navbar />
    <div style={{overflowY:"scroll", height:"80px"}}></div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/exercise/:id" element={<ExerciceDetail/>} />
    </Routes>
    <Footer />
    </>
      
  )
}

export default App;
