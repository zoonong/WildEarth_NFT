import { useState } from 'react';
import React from 'react';

import { Carousel,Navbar,Container, Nav, NavDropdown, Card,DropdownButton, Dropdown } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';

import './/pagecss/Explore.css';
import Buy from './Buy';

const MarketNFT = [
    {
        NAME: "반달가슴곰",
        URL_: "\\img\\bear.png",
        Num_: "1",
        Price : 100
    },
    {
        NAME: "수리부엉이",
        URL_: "\\img\\owl.png",
        Num_: "2",
        Price : 150
    },
    {
        NAME: "하프물범",
        URL_: "\\img\\seal.png",
        Num_: "3",
        Price : 10
    },
    {
        NAME: "반달가슴곰",
        URL_: "\\img\\bear.png",
        Num_: "4",
        Price : 15
    },
    {
        NAME: "수리부엉이",
        URL_: "\\img\\owl.png",
        Num_: "5",
        Price : 1000
    },
    {
        NAME: "하프물범",
        URL_: "\\img\\seal.png",
        Num_: "6",
        Price : 50
    }   
];

const RankItem = [
    {
        NAME: "수리부엉이",
        URL_: "\\img\\owl.png",
        Num_: "2",
        Price : 150
    },
    {
        NAME: "하프물범",
        URL_: "\\img\\seal.png",
        Num_: "3",
        Price : 10
    },
    {
        NAME: "반달가슴곰",
        URL_: "\\img\\bear.png",
        Num_: "4",
        Price : 15
    },
    {
        NAME: "수리부엉이",
        URL_: "\\img\\owl.png",
        Num_: "5",
        Price : 1000
    },
    {
        NAME: "하프물범",
        URL_: "\\img\\seal.png",
        Num_: "6",
        Price : 50
    }   
]


function NFTList({NFT_name,NFT_url,NFT_number,NFT_price}){ 
    const navigate = useNavigate();

    const MovetoBuy = () => {
        navigate("/Buy");
    }
    
    return(
        <div className='marketImg'>
            {/* <Link to={'/Buy/${MarketNFT.}'} */}
            <Card className='marketCard' onClick={MovetoBuy}>
                <Card.Img variant="bottom" src={NFT_url} />
                <Card.Body className='marketCardBody'>
                    <Card.Text style={{fontWeight:"bold",fontSize:"30px",textAlign:"left"}}>
                        {NFT_name}
                        <br/>
                        #{NFT_number}
                    </Card.Text>
                    <Card.Text style={{fontWeight:"",fontSize:"20px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                        PRICE 
                        <br/>
                        {NFT_price} KLAY
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

function Ranking({NFT_name,NFT_url}){

    const navigate = useNavigate();

    const MovetoBuy = () => {
        navigate("/Buy");
    }

    return(
        <div className='rankingImg'>
            <Card className='rankingCard'>
                <Card.Img variant="bottom" src={NFT_url} onClick={MovetoBuy}/>
                <Card.Body className='marketCardBody'>
                    <Card.Text style={{fontWeight:"bold"}}>
                        {NFT_name}          
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

function Explore() {
    let [img_src,change_img] = useState("\\img\\bear.png");
    let [img_name,change_name] = useState("반달가슴곰");
    let [nft_price,change_price] = useState("10000");
    let [nft_no,change_no] = useState("0000");

// function numberSort(){
        
// }
// function lowerPriceSort(){
        
// }
// function HigherPriceSort(){
        
// }

    return (
        <>
        <div className='exploreBack'>
            <div className='rankingBack'>
                <div className='rankingTxt' style={{textAlign:"left",fontWeight:"bold"}}>
                    RANKING
                </div>

                <div className='rankingList'>
                    {RankItem.map(item=>(
                        <Ranking NFT_name={item.NAME} NFT_url={item.URL_}/>
                    ))}
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
                    {MarketNFT.map(NFT=>(
                        <NFTList NFT_name={NFT.NAME} NFT_url={NFT.URL_} NFT_number={NFT.Num_} NFT_price={NFT.Price}/>
                    ))}
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