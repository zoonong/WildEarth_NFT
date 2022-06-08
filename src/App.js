import logo from './logo.svg';
import { useState } from 'react';
import React from 'react';

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Navbar,Container, Nav } from 'react-bootstrap';
import Animal from './pages/Animal';
import Homepage from './pages/Homepage';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Buy from './pages/Buy.js';
import ScrollToTop from './ScrollTop';
import Caver from 'caver-js';
import './App.css';

const CHAIN_ID = '1001'; //테스트넷
let temp = null;
const option = {
  headers: [
    {
      name: "Authorization",
      value: "Basic " + Buffer.from(process.env.REACT_APP_ACCESS_KEY_ID +":"+ process.env.REACT_APP_SECRET_ACCESS_KEY).toString("base64")
    },
    {name: "x-chain-id", value:CHAIN_ID}
  ]
}

const caver = new Caver(new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn",option));

function App() {
  let nav_st = {background:"#FFFFFF", fontWeight: 'bold'};
  let [account,setAccount] = useState(null);
  let [login, setLogin] = useState(false);
  
  async function connect() {
    const accounts = await window.klaytn.enable();
    setAccount(accounts[0]);
  };

  async function check_login() {
    let sign = await window.klaytn._kaikas.isUnlocked();
    if (sign == false){
      setLogin(false);
    }else{
      setLogin(true);
      const accounts = await window.klaytn.enable();
      setAccount(accounts[0]);
    }
  }
  check_login();


  if(login == false){
    return (
    <div className="App">
      <BrowserRouter>
        <Navbar className="navBarTop" variant="light" fixed='top' style={nav_st}>
          <Container className="navBarContainer">
          <Navbar.Brand href="/" className="navLogo">
            <img src = "\img\logo_cap.png" alt={logo} width = '160' height= '72' marginRight = '20px' textAlign = 'center'/>
          </Navbar.Brand>
          <Nav className = "me-auto">
            <Nav.Link className="navLinkAnimal" href="/Animal">Animal</Nav.Link>
            <Nav.Link className="navLinkExplore" href="/Explore">Explore</Nav.Link>
            <Nav.Link className='navLinkConnect' variant='secondary' onClick={connect} id="connectButton">Connect</Nav.Link>
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
            <Route path='/Login' element={<Login/>}/>
          </Routes>
        
        <ScrollToTop>
          <Routes>
              <Route path='Buy/:NFTid' element={<Buy/>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
       
       <div className='btmBar' fixed='bottom'>
                <div className='btmBarTop'>
                    <Navbar bg="#aaaaaa" variant="dark">
                        <Container className='btmNav'>
                        <Navbar.Brand href="/" className="navLogo">
                            <img src = "\img\logo_cap.png" alt={logo} width = '160' height= '72' marginRight = '20px' textAlign = 'center'/>
                        </Navbar.Brand>
                        <Nav className="btmTab">
                            <Nav.Link href="/Animal" style={{color:"#393939", fontWeight:"bold", marginRight:"20%"}}>Animal</Nav.Link>
                            <Nav.Link href="/Explore" style={{color:"#393939", fontWeight:"bold", marginRight:"20%"}}>Explore</Nav.Link>
                            <Nav.Link href="/Profile" id='btmProfileLink' disabled style={{color:"#393939", fontWeight:"bold", marginRight:"20%"}}>Profle</Nav.Link>
                            <Nav.Link  id="btmConnectButton"  onClick={connect} style={{color:"#393939", fontWeight:"bold", marginRight:"50%"}}>Connect</Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar>
                </div>
                <div className='btmBarMid'>
                    <div className='btmBarMidLine'></div>
                </div>
                <div className='btmBarBtm'>
                    <div class='logoCont'>
                        <a  href = "http://dongguk.edu/main">
                            <img src = "\img\dongguk_logo.png" width = '234' height= '76'  textAlign = 'center'></img>
                        </a>
                    </div>
                    <div className='git' style={{textAlign:"left",fontWeight:"bold",fontSize:"24px",color:"#393939"}}>
                        gitHub <br/>
                        <div className='gitAdd' >
                            <div className='gitAddLeft' style={{marginRight:"7%"}}>
                                github.com/chesthyeon <br/>
                                github.com/Shj-A <br/>
                                github.com/zoonong <br/>
                            </div>
                            <div className='gitAddRight'>
                                github.com/Dennis12ax <br/>
                                github.com/ssangjun <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }else{
    return(
      <div className="App">
      <BrowserRouter>
        <Navbar className="navBarTop" variant="light" fixed='top' style={nav_st}>
          <Container className="navBarContainer">
          <Navbar.Brand href="/" className="navLogo">
            <img src = "\img\logo_cap.png" alt={logo} width = '160' height= '72' marginRight = '20px' textAlign = 'center'/>
          </Navbar.Brand>
          <Nav className = "me-auto">
            <Nav.Link variant='secondary' disabled id="myWallet">{account}</Nav.Link>
            <Nav.Link className="navLinkAnimal" href="/Animal">Animal</Nav.Link>
            <Nav.Link className="navLinkExplore" href="/Explore">Explore</Nav.Link>
            <Nav.Link className="navLinkProfile" href="/Profile" id='profileLink'>Profile</Nav.Link>
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
            <Route path='/Login' element={<Login/>}/>
          </Routes>
        
        <ScrollToTop>
          <Routes>
              <Route path='Buy/:NFTid' element={<Buy/>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
       
       <div className='btmBar' fixed='bottom'>
                <div className='btmBarTop'>
                    <Navbar bg="#aaaaaa" variant="dark">
                        <Container className='btmNav'>
                        <Navbar.Brand href="/" className="navLogo">
                            <img src = "\img\logo_cap.png" alt={logo} width = '160' height= '72' marginRight = '20px' textAlign = 'center'/>
                        </Navbar.Brand>
                        <Nav className="btmTab">
                            <Nav.Link href="/Animal" style={{color:"#393939", fontWeight:"bold", marginRight:"20%"}}>Animal</Nav.Link>
                            <Nav.Link href="/Explore" style={{color:"#393939", fontWeight:"bold", marginRight:"20%"}}>Explore</Nav.Link>
                            <Nav.Link href="/Profile" id='btmProfileLink' style={{color:"#393939", fontWeight:"bold", marginRight:"20%"}}>Profle</Nav.Link>
                            <Nav.Link id="btmConnectButton" disabled onClick={connect} style={{color:"#393939", fontWeight:"bold", marginRight:"50%"}}>Connect</Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar>
                </div>
                <div className='btmBarMid'>
                    <div className='btmBarMidLine'></div>
                </div>
                <div className='btmBarBtm'>
                    <div class='logoCont'>
                        <a  href = "http://dongguk.edu/main">
                            <img src = "\img\dongguk_logo.png" width = '234' height= '76'  textAlign = 'center'></img>
                        </a>
                    </div>
                    <div className='git' style={{textAlign:"left",fontWeight:"bold",fontSize:"24px",color:"#393939"}}>
                        gitHub <br/>
                        <div className='gitAdd' >
                            <div className='gitAddLeft' style={{marginRight:"7%"}}>
                                github.com/chesthyeon <br/>
                                github.com/Shj-A <br/>
                                github.com/zoonong <br/>
                            </div>
                            <div className='gitAddRight'>
                                github.com/Dennis12ax <br/>
                                github.com/ssangjun <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
  }
  
}
export default App;
