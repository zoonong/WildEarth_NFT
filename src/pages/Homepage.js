import { useState } from 'react';
import logo from '../logo.svg';
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

                    <Carousel.Item>
                        <img className="d-block w-100" src="\img\main_img_4.png" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src="\img\main_img_5.png" />
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
        <div className='homepageFindNFT'>
            새로운 NFT 보러가기
        </div>
        
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

        </>    
    );
}

export default Homepage;