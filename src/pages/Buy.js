import React, { Component } from 'react';
import './/pagecss/Buy.css';
import { useState } from 'react';
import { Carousel, Dropdown, DropdownButton, Card, Button } from 'react-bootstrap';

export default function Buy() {
    let back_color = {background:"#0077a3"}
    let [img_src,change_img] = useState("\\img\\bear.png");
    let [img_name,change_name] = useState("반달가슴곰");
    let [img_info,change_info] = useState(['ASIATIC BLACK BEAR', '25','40~200','120-190','약 25000','멸종 취약종']); //학명,예상 수명, 몸무게, 길이, 개체수
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
                            <table>
                                <tr>
                                    <th>동물 이름</th>
                                    <td>{img_info[0]}</td>
                                </tr>
                                <tr>
                                    <th>배경</th>
                                    <td>{img_info[1]}</td>
                                </tr>
                                <tr>
                                    <th>악세사리</th>
                                    <td>{img_info[2]}</td>
                                </tr>
                                <tr>
                                    <th>등록일</th>
                                    <td>{img_info[3]}</td>
                                </tr>
                                <tr>
                                    <th>가격</th>
                                    <td>{img_info[4]}</td>
                                </tr>
                                <tr>
                                    <th>등급</th>
                                    <td style={info5_st}>{img_info[5]}</td>
                                </tr>
                            </table>
                        </Card.Text>
                        <Button  variant="light" style={back_color}>
                            구매하기
                        </Button>
                    </Card.Body>
                </Card>
                </div>

            </div>

            <br></br>
        <br></br>

        <h2>{img_name}과 관련된 더 많은 NFT</h2>
        <br></br>
        <div className='Buy_frame_bottom'>
            <div className='Buy_nft_card'>
                    <Card>
                        <Card.Img variant="bottom" src={img_src} />
                    </Card>
            </div>

            <div className='Buy_nft_card'>
                    <Card>
                        <Card.Img variant="bottom" src={img_src} />
                    </Card>
            </div>

            <div className='Buy_nft_card'>
                    <Card>
                        <Card.Img variant="bottom" src={img_src} />
                    </Card>
            </div>
        </div>
        </div>                              
    )
}