import React from 'react';
import './/pagecss/Profile.css';
import { useState } from 'react';
import { Carousel, Dropdown, DropdownButton, Card, Button , Nav, Navbar, Container,Form} from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';

var profile_name = 'DEFAULT_NAME'
var profile_no = '0000'
// var wallet_address = account

let back_color = {background:"#E0FACC"}

function NFT_sell() {
    return(
        <div>
            <Form.Group className="mb-3">
                <Form.Control placeholder="COST(KLAY)" />
            </Form.Group>
            <Button  variant="light" style={back_color}>
                Sell
            </Button>
        </div>
    );
};

function ShowNFT({NFT_name,NFT_url,NFT_number}){ 
    let [show,setshow] = useState(false);

    return(
        <div className='profileImg'>
            <Card className='profileCard'>
                <Card.Img variant="bottom" src={NFT_url}  onClick={()=>{setshow(!show);}} />
                <Card.Body className='profileCardBody' onClick={()=>{setshow(!show);}}>
                    <Card.Text style={{fontWeight:"bold",fontSize:"20px",textAlign:"left"}}>
                        #{NFT_number} : {NFT_name}
                        <br/>
                    </Card.Text>
                </Card.Body>
                <Card.Footer  style={{background:"#f8fdf8"}}>
                    {show && <NFT_sell/>}
                </Card.Footer>
            </Card>
        </div>
    );

};
const Collected_NFT = [
    {
        NAME: "반달가슴곰",
        URL_: "\\img\\bear.png",
        Num_: "1" 
    },
    {
        NAME: "수리부엉이",
        URL_: "\\img\\owl.png",
        Num_: "2" 
    },
    {
        NAME: "하프물범",
        URL_: "\\img\\seal.png",
        Num_: "3" 
    },
    {
        NAME: "반달가슴곰",
        URL_: "\\img\\bear.png",
        Num_: "4" 
    },
    {
        NAME: "수리부엉이",
        URL_: "\\img\\owl.png",
        Num_: "5" 
    },
    {
        NAME: "하프물범",
        URL_: "\\img\\seal.png",
        Num_: "6" 
    }   
];


function Profile() {
    return (
        <>
        <div className='profileBack'>
            <div className='profileLeft'>
                <div className='proflieName'>
                    {profile_name}
                </div>
                <div className='profileNo'>
                    #{profile_no}
                </div>
                <div className='wallet'>
                    <h2>
                        WALLET ADDRESS
                    </h2>
                </div>
                {/* <div className='walletAddress'>
                    <p>
                        {account}
                    </p>
                    
                </div> */}
                <br></br>
                <br></br>
                <div className='Mint_div'>
                    <Form.Group className="mb-3">
                        <Form.Label>JSON address</Form.Label>
                        <Form.Control placeholder="JSON_URL" />
                        <Form.Text className="text-muted">
                            Minting할 NFT JSON URL 입력
                        </Form.Text>
                    </Form.Group>
                    <Button  variant="light" style={back_color}>
                        Mint New NFT
                    </Button>
                </div>
            </div>

            <div className='profileRight'>
                <div className='tapLine' style={{fontWeight:"bold",fontSize:"50px",textAlign:"left"}}>
                    COLLECTED
                </div>
                <div className='profileList'>
                    {Collected_NFT.map(NFT=>(
                        <ShowNFT NFT_name={NFT.NAME} NFT_url={NFT.URL_} NFT_number={NFT.Num_}/>
                    ))}
                </div>
            </div>
        </div>
        <div className='btmBar' fixed='bottom'>
                <div className='btmBarTop'>
                    <Navbar bg="#aaaaaa" variant="dark">
                        <Container className='btmNav'>
                        <Nav className="btmTab">
                            <Nav.Link href="/" style={{marginRight:'20%'}}> <img src = "\img\logo_cap.png" width = '160' height= '72'  textAlign = 'center'></img> </Nav.Link>
                            <Nav.Link href="/Animal" style={{color:"#393939", fontWeight:"bold", marginRight:"20%"}}>Animal</Nav.Link>
                            <Nav.Link href="/Explore" style={{color:"#393939", fontWeight:"bold", marginRight:"20%"}}>Explore</Nav.Link>
                            <Nav.Link href="/Profile" style={{color:"#393939", fontWeight:"bold", marginRight:"20%"}}>Profile</Nav.Link>
                            <Nav.Link  style={{color:"#393939", fontWeight:"bold", marginRight:"%"}}>Connect</Nav.Link>
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
                                github.com/banghyun <br/>
                                github.com/Heejun <br/>
                                github.com/zoonong <br/>
                            </div>
                            <div className='gitAddRight'>
                                github.com/suhwan <br/>
                                github.com/ssangjun <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;