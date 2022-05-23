import { useState } from 'react';
import './/pagecss/Homepage.css';
import React from 'react';
import { NavLink,BrowserRouter, Route, Routes } from 'react-router-dom';
import { Carousel,Navbar,Container, Nav, NavDropdown, Card ,Button, ButtonGroup} from 'react-bootstrap';
import Buy from './Buy';

function Homepage() {
    
    let img_src = ["\\img\\bear.png", "\\img\\owl.png"]
    let mid_font_st = {color : "red", fontWeight : "bold"};

    return (
        <>
        <div className="homepageFrameTop">
            <div className="A_img_div">
                <Carousel variant="dark" className="img_slide">
                    <Carousel.Item>
                        <img className="d-block w-100" src="\img\main_img_1.png" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src="\img\main_img_2.png" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src="\img\main_img_3.png" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        <div className='homepageFrameMid'>
            <span style={mid_font_st}>환경파괴</span>가 매일 진행되는 현대사회, <br/>
            동물들의 터전은 인류에 의해 계속 위협받고 있습니다.<br/>
            우리의 편의를 위해 외면하던 사이 그들은 <span style={mid_font_st}>멸종 위기</span>에 이르렀습니다.<br/>
            Wild Earth는 NFT를 통해 위기의 동물들에 대해 알리고<br/>
            이러한 <span style={mid_font_st}>비극적인 일</span>이 일어나지 않기를 바라며<br/>
            진행된 프로젝트 입니다.<br/>
        </div>
        <br></br>
        <h1>새로운 NFT 보러가기</h1>
        <br></br>    
        <div className="homepageFrameBottom">
                <div className='home_nft_card'>
                    <Card>
                        <Card.Img variant="bottom" src={img_src[1]} />
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </div>

                <div className='home_nft_card'>
                    <Card>
                        <Card.Img variant="bottom" src={img_src[1]} />
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </div>

                <div className='home_nft_card'>
                    <Card>
                        <Card.Img variant="bottom" src={img_src[1]} />
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </div>

                <div className='home_nft_card'>
                    <Card>
                        <Card.Img variant="bottom" src={img_src[1]} />
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </div>

                <div className='home_nft_card'>
                    <Card>
                        <Card.Img variant="bottom" src={img_src[1]} />
                        <Card.Body>
                        </Card.Body>
                    </Card>
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

export default Homepage;