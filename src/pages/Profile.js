import React, { Component } from 'react';
import './/pagecss/Profile.css';
import { useState } from 'react';
import { Carousel, Dropdown, DropdownButton, Card, Button } from 'react-bootstrap';

var profile_name = 'DEFAULT_NAME'
var profile_no = '0000'
var wallet_address = '0x00000000'

let img_src = ["\\img\\bear.png", "\\img\\owl.png"]

function Profile() {
    let [img_src,change_img] = useState("\\img\\bear.png");
    let [img_name,change_name] = useState("반달가슴곰");
    let [nft_price,change_price] = useState("10000");
    let [nft_no,change_no] = useState("0000");

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