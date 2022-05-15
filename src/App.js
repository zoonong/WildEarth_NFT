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

function App() {
  let nav_st = {background:"#E0FACC", fontWeight: 'bold'}
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar variant="light" fixed='top' style={nav_st}>
          <Container>
          <Navbar.Brand href="/">
          <img src = "\img\logo_cap2.png" alt={logo} width = '100' height= '60' marginRight = '20px' textAlign = 'center'/>
          WildEarth</Navbar.Brand>
          <Nav className = "me-auto">
            <Nav.Link href="Animal">Animal</Nav.Link>
            <Nav.Link href="Explore">Explore</Nav.Link>
            <Nav.Link href="Profile">Profile</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
            <Nav.Link href="Buy">Buy</Nav.Link>
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
          </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
