import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar,Container, Nav, Card } from 'react-bootstrap';
import Animal from './pages/Animal';
import Homepage from './pages/Homepage';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Buy from './pages/Buy';
import Mint from './pages/Mint';

function App() {
  let nav_st = {background:"#FFFFFF", fontWeight: 'bold'}
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar className="navBar" variant="light" fixed='top' style={nav_st}>
          <Container>
          <Navbar.Brand href="/" className="navLogo">
            <img src = "\img\logo_cap.png" alt={logo} width = '160' height= '72' marginRight = '20px' textAlign = 'center'/>
          </Navbar.Brand>
          <Nav className = "me-auto">
            <Nav.Link href="Animal">Animal</Nav.Link>
            <Nav.Link href="Explore">Explore</Nav.Link>
            <Nav.Link href="Profile">Profile</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        <br></br>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='Animal' element={<Animal/>}/>
            <Route path='Explore' element={<Explore/>}/>
            <Route path='Profile' element={<Profile/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='Buy' element={<Buy/>}/>
            <Route path='Mint' element={<Mint/>}/>
          </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
