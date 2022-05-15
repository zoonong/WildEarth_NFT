import { useState } from 'react';
import React from 'react';
import { Carousel,Navbar,Container, Nav, NavDropdown, Card } from 'react-bootstrap';
import './/pagecss/Explore.css';



function Explore() {
    let [img_src,change_img] = useState("\\img\\bear.png");
    let [img_name,change_name] = useState("반달가슴곰");
    let [nft_price,change_price] = useState("10000");
    let [nft_no,change_no] = useState("0000");

    return (
        <>
        <div className='exploreBack'>
            <div className='rankingBack'>
                <div className='rankingTxt' style={{textAlign:"left",fontWeight:"bold"}}>
                    RANKING
                </div>

                <div className='rankingList'>
                <div className='rankingImg'>
                    <Card className='rankingCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='marketCardBody'>
                                <Card.Text style={{fontWeight:"bold"}}>
                                    {img_name}
                                    
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                <div className='rankingImg'>
                    <Card className='rankingCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='marketCardBody'>
                                <Card.Text style={{fontWeight:"bold"}}>
                                    {img_name}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                <div className='rankingImg'>
                    <Card className='rankingCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='marketCardBody'>
                                <Card.Text style={{fontWeight:"bold"}}>
                                    {img_name}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                <div className='rankingImg'>
                    <Card className='rankingCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='marketCardBody'>
                                <Card.Text style={{fontWeight:"bold"}}>
                                    {img_name}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                <div className='rankingImg'>
                    <Card className='rankingCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='marketCardBody'>
                                <Card.Text style={{fontWeight:"bold"}}>
                                    {img_name}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                </div>
            </div>
            <div className='marketBack'>
                <div className='marketTxt' style={{textAlign:"left",fontWeight:"bold"}}>
                    MARKET
                </div>
                <div className='marketList'>
                <div className='marketImg'>
                    <Card className='marketCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='marketCardBody'>
                                <Card.Text style={{fontWeight:"bold",fontSize:"30px",textAlign:"left"}}>
                                    {img_name}
                                    <br/>
                                    #{nft_no}
                                </Card.Text>
                                <Card.Text style={{fontWeight:"",fontSize:"20px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                                    PRICE 
                                    <br/>
                                    &#8361;{nft_price}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                <div className='marketImg'>
                    <Card className='marketCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='marketCardBody'>
                                <Card.Text style={{fontWeight:"bold",fontSize:"30px",textAlign:"left"}}>
                                    {img_name}
                                    <br/>
                                    #{nft_no}
                                </Card.Text>
                                <Card.Text style={{fontWeight:"",fontSize:"20px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                                    PRICE 
                                    <br/>
                                    &#8361;{nft_price}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                <div className='marketImg'>
                    <Card className='marketCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='marketCardBody'>
                                <Card.Text style={{fontWeight:"bold",fontSize:"30px",textAlign:"left"}}>
                                    {img_name}
                                    <br/>
                                    #{nft_no}
                                </Card.Text>
                                <Card.Text style={{fontWeight:"",fontSize:"20px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                                    PRICE 
                                    <br/>
                                    &#8361;{nft_price}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                <div className='marketImg'>
                    <Card className='marketCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='marketCardBody'>
                                <Card.Text style={{fontWeight:"bold",fontSize:"30px",textAlign:"left"}}>
                                    {img_name}
                                    <br/>
                                    #{nft_no}
                                </Card.Text>
                                <Card.Text style={{fontWeight:"",fontSize:"20px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                                    PRICE 
                                    <br/>
                                    &#8361;{nft_price}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                <div className='marketImg'>
                    <Card className='marketCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='marketCardBody'>
                                <Card.Text style={{fontWeight:"bold",fontSize:"30px",textAlign:"left"}}>
                                    {img_name}
                                    <br/>
                                    #{nft_no}
                                </Card.Text>
                                <Card.Text style={{fontWeight:"",fontSize:"20px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                                    PRICE 
                                    <br/>
                                    &#8361;{nft_price}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                <div className='marketImg'>
                    <Card className='marketCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='marketCardBody'>
                                <Card.Text style={{fontWeight:"bold",fontSize:"30px",textAlign:"left"}}>
                                    {img_name}
                                    <br/>
                                    #{nft_no}
                                </Card.Text>
                                <Card.Text style={{fontWeight:"",fontSize:"20px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                                    PRICE 
                                    <br/>
                                    &#8361;{nft_price}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                <div className='marketImg'>
                    <Card className='marketCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='marketCardBody'>
                                <Card.Text style={{fontWeight:"bold",fontSize:"30px",textAlign:"left"}}>
                                    {img_name}
                                    <br/>
                                    #{nft_no}
                                </Card.Text>
                                <Card.Text style={{fontWeight:"",fontSize:"20px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                                    PRICE 
                                    <br/>
                                    &#8361;{nft_price}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
                <div className='marketImg'>
                    <Card className='marketCard'>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body className='marketCardBody'>
                                <Card.Text style={{fontWeight:"bold",fontSize:"30px",textAlign:"left"}}>
                                    {img_name}
                                    <br/>
                                    #{nft_no}
                                </Card.Text>
                                <Card.Text style={{fontWeight:"",fontSize:"20px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
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

export default Explore;