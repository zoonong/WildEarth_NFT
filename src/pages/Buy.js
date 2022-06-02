import React from 'react';
import logo from '../logo.svg';
import './/pagecss/Buy.css';
import { useState, useEffect } from 'react';
import { Card, Button , Nav, Navbar, Container,ListGroup} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

async function GetInfo(jsonAddress){
    let Data = await axios.get(jsonAddress);
    let str = JSON.stringify(Data);
    let jsonArray = await JSON.parse(str);
    let res = jsonArray.data
    return res;
}

export default function Buy() {
    let back_color = {background:"#43BCC6", fontSize:"110%"}
    let info5_st = {color:"black", fontWeight: 'bold'};
    let NFTinfo = useLocation();
    console.log(NFTinfo)
    let [data,setData] = useState(null);
    let [att, setAtt] = useState(null);
    let cost = NFTinfo.state.Cost/(10**18);
    let [show, setShow] = useState(true);

    useEffect(()=>{
        const info = async()=>{
            const arr = await GetInfo(NFTinfo.state.jsonAddress);
            setData(arr);
            const arr1 = Object.values(arr.attributes);
            console.log(arr1);
            setAtt([arr1[0].value, arr1[1].value, arr1[2].value, arr1[3].value]);
        }
        info();
    },[]);

    if(!data || !att){
        return null;
    }

    return(
        <div className='buyBack'>
            <br></br>
            <div className='Buy_frame_top'>
                <div className='NFT_img_card'>
                    <Card className='buyNFTCard'>
                        <Card.Img variant="bottom" src={data.image} />
                    </Card>
                </div>

                <div className='buyTopRight'>
                    <div className='buyTopRightTitle'>
                        #{NFTinfo.state.Nid} : {att[1]}
                    </div>
                    <div className='buyTopRightDate'>
                        
                    </div>
                    <div className='buytopRightInfo'>
                        배경<br/>{att[0]}
                        <div className='buytopRightInfoLine'></div>
                        모자<br/>{att[2]}
                        <div className='buytopRightInfoLine'></div>
                        목걸이<br/>{att[3]}
                    </div>
                    <div className='buyTopRightBuy'>
                        Price
                        <div className='buyTopRightPrice'>
                            <div className='buyTopRightLogo'>
                                <img src='\img\Klaytn-Logo.png' width = '45' height= '45'></img>
                            </div>
                            {cost}
                        </div>
                        <div >
                            <Button className='buyTopRightButton' variant="light" style={back_color}>
                                구매하기
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <br></br>
        <br></br>

        <div className='buyBottomText'>
            More From This NFT
        </div>
        <div className='Buy_frame_bottom'>
            <div className='Buy_nft_card'>
                    <Card>
                        <Card.Img variant="bottom" src={data.image} />
                    </Card>
            </div>

            <div className='Buy_nft_card'>
                    <Card>
                        <Card.Img variant="bottom" src={data.image} />
                    </Card>
            </div>

            <div className='Buy_nft_card'>
                    <Card>
                        <Card.Img variant="bottom" src= {data.image} />
                    </Card>
            </div>
        </div>
        <div className='btmBar' fixed='bottom'>
                <div className='btmBarTop'>
                    <Navbar bg="#aaaaaa" variant="dark">
                        <Container className='btmNav'>
                        <Navbar.Brand href="/" className="navLogo">
                            <img src = "\img\logo_cap.png" alt={logo} width = '160' height= '72' marginRight = '20px' textAlign = 'center'/>
                        </Navbar.Brand>
                        <Nav className="btmTab">
                            <Nav.Link href="/Animal" style={{color:"#393939", fontWeight:"bold", marginRight:"20%"}}>Animal</Nav.Link>
                            <Nav.Link href="/Explore" style={{color:"#393939", fontWeight:"bold", marginRight:"20%"}}>Explore</Nav.Link>
                            <Nav.Link href="/Profile" style={{color:"#393939", fontWeight:"bold", marginRight:"20%"}}>Profile</Nav.Link>
                            <Nav.Link  style={{color:"#393939", fontWeight:"bold", marginRight:"50%"}}>Connect</Nav.Link>
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
    )
}