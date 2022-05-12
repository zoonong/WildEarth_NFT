import { useState } from 'react';
import './/pagecss/Homepage.css';
import React from 'react';
import { Carousel,Navbar,Container, Nav, NavDropdown, Card } from 'react-bootstrap';

function Homepage() {
    
    let img_src = ["\\img\\bear.png", "\\img\\owl.png"]

    return (
        <>
        <div className="homepageFrameTop">
            <img className="earthLogo" src="\img\earth.png" />

            <div className="A_img_div">
                <Carousel variant="dark" className="img_slide">
                    <Carousel.Item>
                        <img className="d-block w-100" src="\img\bear.png" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src="\img\owl.png" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src="\img\monkey.png" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src="\img\cheetah.png" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src="\img\seal.png" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        <br></br>
        <h1>새로운 NFT 보러가기</h1>
        <br></br>    
        <div className="homepageFrameBottom">
            <div className='A_nft_card'>
                <Card>
                    <Card.Img variant="bottom" src={img_src[1]} />
                    <Card.Body>
                    </Card.Body>
                </Card>
            </div>

            <div className='A_nft_card'>
                <Card>
                    <Card.Img variant="bottom" src={img_src[1]} />
                    <Card.Body>
                    </Card.Body>
                </Card>
            </div>

            <div className='A_nft_card'>
                <Card>
                    <Card.Img variant="bottom" src={img_src[1]} />
                    <Card.Body>
                    </Card.Body>
                </Card>
            </div>

            <div className='A_nft_card'>
                <Card>
                    <Card.Img variant="bottom" src={img_src[1]} />
                    <Card.Body>
                    </Card.Body>
                </Card>
            </div>

            <div className='A_nft_card'>
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