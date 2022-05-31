import logo from './logo.svg';
import { useState,useEffect } from 'react';
import React from 'react';

import { BrowserRouter, Route, Routes, useParams,useNavigate} from 'react-router-dom';
import { Navbar,Container, Nav, Alert, Button } from 'react-bootstrap';
import Animal from './pages/Animal';
import Homepage from './pages/Homepage';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Buy from './pages/Buy.js';
import ScrollToTop from './ScrollTop';

import {ACCESS_KEY_ID, SECRET_ACCESS_KEY} from './apikey';
import Caver from 'caver-js';
import './App.css';

const CHAIN_ID = '1001'; //테스트넷

const option = {
  headers: [
    {
      name: "Authorization",
      value: "Basic " + Buffer.from(ACCESS_KEY_ID +":"+ SECRET_ACCESS_KEY).toString("base64")
    },
    {name: "x-chain-id", value:CHAIN_ID}
  ]
}

const caver = new Caver(new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn",option));

let account;

async function connect() {
  const accounts = await window.klaytn.enable();
  account = accounts[0];
  caver.klay.getBalance(account)
      .then(function (balance) {
          document.getElementById("connectButton").innerHTML = "";
          document.getElementById("profileLink").innerHTML = 'Profile';
          document.getElementById("myWallet").innerHTML = `${account}`;
          // document.getElementById("myKlay").innerHTML = `잔액: ${caver.utils.fromPeb(balance, "KLAY")} KLAY`
      });
  // await check_status();
}

function App() {
  let nav_st = {background:"#FFFFFF", fontWeight: 'bold'}
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar className="navBarTop" variant="light" fixed='top' style={nav_st}>
          <Container className="navBarContainer">
          <Navbar.Brand href="/" className="navLogo">
            <img src = "\img\logo_cap.png" alt={logo} width = '160' height= '72' marginRight = '20px' textAlign = 'center'/>
          </Navbar.Brand>
          <Nav className = "me-auto">
            <Nav.Link variant='secondary' disabled id="myWallet"></Nav.Link>
            <Nav.Link className="navLinkAnimal" href="/Animal">Animal</Nav.Link>
            <Nav.Link className="navLinkExplore" href="/Explore">Explore</Nav.Link>
            <Nav.Link className="navLinkProfile" href="/Profile" id='profileLink' ></Nav.Link>
            {/* <Nav.Link href="/Login">Login</Nav.Link> */}
            <Nav.Link className='navLinkConnect' variant='secondary' onClick={connect} id="connectButton">Connect</Nav.Link>
            {/* <Button variant="secondary" onClick={
              async ()=>{
                if(typeof window.klaytn !== 'undefined') {
                  const accounts = await window.klaytn.enable()
                  const account = accounts[0] // We currently only ever provide a single account,but the array gives us some room to grow.
                }
              }}>카이카스 지갑연결</Button> */}
          </Nav>
          </Container>
        </Navbar>
        <br></br>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='Animal' element={<Animal/>}/>
            <Route path='Explore' element={<Explore/>}/>
            <Route path='Buy/:NFTid' element={<Buy/>} />
            <Route path='Profile' element={<Profile/>}/>
            <Route path='Login' element={<Login/>}/>
          </Routes>
        
        <ScrollToTop>
          <Routes>
              <Route path='Buy/:NFTid' element={<Buy/>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
       
    </div>
  );
}
export default App;
