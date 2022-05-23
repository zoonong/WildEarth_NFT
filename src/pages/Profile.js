import React, { Component } from 'react';
import './/pagecss/Profile.css';
import { useState } from 'react';
import { Carousel, Dropdown, DropdownButton, Card, Button , Nav, Navbar, Container} from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Mint from './Mint';

var profile_name = 'DEFAULT_NAME'
var profile_no = '0000'
// var wallet_address = account

let back_color = {background:"#E0FACC"}
let img_src = ["\\img\\bear.png", "\\img\\owl.png"]

function Profile() {
    let [img_src,change_img] = useState("\\img\\bear.png");
    let [img_name,change_name] = useState("반달가슴곰");
    let [nft_price,change_price] = useState("10000");
    let [nft_no,change_no] = useState("0000");

    function Move_to_mint(e) {
        window.location.replace("/Mint")
    }

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
                <div className='MintLink'>
                    <Link to={Mint}>
                        <Button  variant="light" style={back_color} onClick= {Move_to_mint}>
                            Mint New NFT
                        </Button>
                    </Link>
                </div>
            </div>
            <div className='profileRight'>
                <div className='tapLine' style={{fontWeight:"bold",fontSize:"50px",textAlign:"left"}}>
                    COLLECTED
                </div>
                <div className='profileList'>
                <div className='profileImg'>
                    <Card className='profileCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='profileCardBody'>
                                <Card.Text style={{fontWeight:"bold",fontSize:"20px",textAlign:"left"}}>
                                    {img_name}
                                    <br/>
                                    #{nft_no}
                                </Card.Text>
                                <Card.Text style={{fontWeight:"",fontSize:"17px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                                    PRICE 
                                    <br/>
                                    &#8361;{nft_price}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                <div className='profileImg'>
                    <Card className='profileCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='profileCardBody'>
                                <Card.Text style={{fontWeight:"bold",fontSize:"20px",textAlign:"left"}}>
                                    {img_name}
                                    <br/>
                                    #{nft_no}
                                </Card.Text>
                                <Card.Text style={{fontWeight:"",fontSize:"17px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                                    PRICE 
                                    <br/>
                                    &#8361;{nft_price}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                <div className='profileImg'>
                    <Card className='profileCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='profileCardBody'>
                                <Card.Text style={{fontWeight:"bold",fontSize:"20px",textAlign:"left"}}>
                                    {img_name}
                                    <br/>
                                    #{nft_no}
                                </Card.Text>
                                <Card.Text style={{fontWeight:"",fontSize:"17px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                                    PRICE 
                                    <br/>
                                    &#8361;{nft_price}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                <div className='profileImg'>
                    <Card className='profileCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='profileCardBody'>
                                <Card.Text style={{fontWeight:"bold",fontSize:"20px",textAlign:"left"}}>
                                    {img_name}
                                    <br/>
                                    #{nft_no}
                                </Card.Text>
                                <Card.Text style={{fontWeight:"",fontSize:"17px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                                    PRICE 
                                    <br/>
                                    &#8361;{nft_price}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                <div className='profileImg'>
                    <Card className='profileCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='profileCardBody'>
                                <Card.Text style={{fontWeight:"bold",fontSize:"20px",textAlign:"left"}}>
                                    {img_name}
                                    <br/>
                                    #{nft_no}
                                </Card.Text>
                                <Card.Text style={{fontWeight:"",fontSize:"17px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                                    PRICE 
                                    <br/>
                                    &#8361;{nft_price}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                <div className='profileImg'>
                    <Card className='profileCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='profileCardBody'>
                                <Card.Text style={{fontWeight:"bold",fontSize:"20px",textAlign:"left"}}>
                                    {img_name}
                                    <br/>
                                    #{nft_no}
                                </Card.Text>
                                <Card.Text style={{fontWeight:"",fontSize:"17px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                                    PRICE 
                                    <br/>
                                    &#8361;{nft_price}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                <div className='profileImg'>
                    <Card className='profileCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='profileCardBody'>
                                <Card.Text style={{fontWeight:"bold",fontSize:"20px",textAlign:"left"}}>
                                    {img_name}
                                    <br/>
                                    #{nft_no}
                                </Card.Text>
                                <Card.Text style={{fontWeight:"",fontSize:"17px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                                    PRICE 
                                    <br/>
                                    &#8361;{nft_price}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                <div className='profileImg'>
                    <Card className='profileCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='profileCardBody'>
                                <Card.Text style={{fontWeight:"bold",fontSize:"20px",textAlign:"left"}}>
                                    {img_name}
                                    <br/>
                                    #{nft_no}
                                </Card.Text>
                                <Card.Text style={{fontWeight:"",fontSize:"17px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                                    PRICE 
                                    <br/>
                                    &#8361;{nft_price}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>

                </div>
            </div>
        </div>
        <div className='btmBar' fixed='bottom'>
                <div className='btmBarTop'>
                    <Navbar bg="#aaaaaa" variant="dark">
                        <Container className='btmNav'>
                        <Nav className="btmTab">
                            <Nav.Link href="/" style={{marginRight:'20%'}}> <img src = "\img\logo_cap.png" width = '160' height= '72'  textAlign = 'center'></img> </Nav.Link>
                            <Nav.Link href="Animal" style={{color:"#393939", fontWeight:"bold", marginRight:"20%"}}>Animal</Nav.Link>
                            <Nav.Link href="Explore" style={{color:"#393939", fontWeight:"bold", marginRight:"20%"}}>Explore</Nav.Link>
                            <Nav.Link href="Profile" style={{color:"#393939", fontWeight:"bold", marginRight:"20%"}}>Profile</Nav.Link>
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