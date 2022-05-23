import React, { Component } from 'react';
import './/pagecss/Buy.css';
import { useState } from 'react';
import { Carousel, Dropdown, DropdownButton, Card, Button , Nav, Navbar, Container} from 'react-bootstrap';

export default function Buy() {
    let back_color = {background:"#43BCC6"}
    let [img_src,change_img] = useState("\\img\\bear.png");
    let [img_name,change_name] = useState("반달가슴곰");
    let [img_info,change_info] = useState(['ASIATIC BLACK BEAR', '-','-','2022/05/15','1','Normal']); //학명,예상 수명, 몸무게, 길이, 개체수
    let [img_Link,change_link] = useState("https://animalia.bio/asiatic-black-bear");
    let info5_st = {color:"black", fontWeight: 'bold'};

    return(
        <div>
            <br></br>
            <div className='Buy_frame_top'>
                <div className='NFT_img_card'>
                    <Card>
                        <Card.Img variant="bottom" src={img_src} />
                            <Card.Body>
                                <Card.Text style={{fontWeight:"bold"}}>
                                    {img_name}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>

                <div className='NFT_info_card'>
                <Card>
                    <Card.Header style={back_color}>
                        {img_name} NFT의 상세정보
                    </Card.Header>
                    <br></br>
                    <Card.Body>
                        <br></br>
                        <Card.Text>
                            <table className='table_B'>
                                <tr>
                                    <th className='th_2'>동물 이름</th>
                                    <td className='td_2'>{img_info[0]}</td>
                                </tr>
                                <tr>
                                    <th className='th_2'>배경</th>
                                    <td className='td_2'>{img_info[1]}</td>
                                </tr>
                                <tr>
                                    <th className='th_2'>악세사리</th>
                                    <td className='td_2'>{img_info[2]}</td>
                                </tr>
                                <tr>
                                    <th className='th_2'>등록일</th>
                                    <td className='td_2'>{img_info[3]}</td>
                                </tr>
                                <tr>
                                    <th className='th_2'>가격</th>
                                    <td className='td_2'>{img_info[4]}</td>
                                </tr>
                                <tr>
                                    <th className='th_2'>등급</th>
                                    <td style={info5_st}>{img_info[5]}</td>
                                </tr>
                            </table>
                        </Card.Text>
                        <div className='NFT_buy_btn'>
                            <Button  variant="light" style={back_color}>
                                구매하기
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
                </div>

            </div>

            <br></br>
        <br></br>

        <h2>{img_name}과 관련된 더 많은 NFT</h2>
        <br/>
        <div className='Buy_frame_bottom'>
            <div className='Buy_nft_card'>
                    <Card>
                        <Card.Img variant="bottom" src={img_src} />
                        <Card.Body>
                        </Card.Body>
                    </Card>
            </div>

            <div className='Buy_nft_card'>
                    <Card>
                        <Card.Img variant="bottom" src={img_src} />
                        <Card.Body>
                        </Card.Body>
                    </Card>
            </div>

            <div className='Buy_nft_card'>
                    <Card>
                        <Card.Img variant="bottom" src={img_src} />
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
    </div>                              
    )
}