import { useState } from 'react';
import React from 'react';
import { Carousel,Navbar,Container, Nav, NavDropdown, Card,DropdownButton, Dropdown } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import './/pagecss/Explore.css';
import Buy from './Buy';



function Explore() {
    let [img_src,change_img] = useState("\\img\\bear.png");
    let [img_name,change_name] = useState("반달가슴곰");
    let [nft_price,change_price] = useState("10000");
    let [nft_no,change_no] = useState("0000");

    function Move_to_Buy(e) {
        window.location.replace("/Buy")
    }

    function numberSort(){
        
    }
    function lowerPriceSort(){
        
    }
    function HigherPriceSort(){
        
    }

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
                    <Link to={Buy}>
                        <Card.Img variant="bottom" src={img_src} onClick={Move_to_Buy}/>
                    </Link>
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
                <div className="sortBack">
                    <DropdownButton id="marketSort" variant='light' size='larger' title="Sort By" textAlign="right">
                        <Dropdown.Item as="button" onClick={numberSort}>번호순</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={lowerPriceSort}>낮은가격순</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={HigherPriceSort}>높은가격순</Dropdown.Item>
                    </DropdownButton> 
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
        </div>
        </>
    );
}

export default Explore;