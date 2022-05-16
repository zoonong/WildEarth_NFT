import { useState } from 'react';
import './/pagecss/Homepage.css';
import React from 'react';
import { NavLink,BrowserRouter, Route, Routes } from 'react-router-dom';
import { Carousel,Navbar,Container, Nav, NavDropdown, Card } from 'react-bootstrap';
import Buy from './Buy';

function Homepage() {
    
    let img_src = ["\\img\\bear.png", "\\img\\owl.png"]

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
            환경 파괴 어쩌구...<br/>
            동물들의 터전이 어쩌구...<br/>
            멸종 위기 어쩌구...<br/>
            경각심 어쩌구...<br/>
            Wild Earth는 어쩌구...<br/>
            NFT를 통해 어쩌구...<br/>
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
        </>    
    );
}

export default Homepage;