import React, { Component } from 'react';
import './/pagecss/Profile.css';
import { useState } from 'react';
import { Dropdown, DropdownButton, Card, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Mint from './Mint';

var profile_name = 'DEFAULT_NAME'
var profile_no = '0000'
var wallet_address = '0x00000000'

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
                    WALLET
                </div>
                <div className='walletAddress'>
                    {wallet_address}
                </div>
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
        </>
    );
}

export default Profile;