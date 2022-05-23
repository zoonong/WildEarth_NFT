import React from 'react';
import './/pagecss/Buy.css';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";


export default function Buy() {
    let back_color = {background:"#43BCC6"}
    let [img_src,change_img] = useState("\\img\\bear.png");
    let [img_name,change_name] = useState("반달가슴곰");
    let [img_info,change_info] = useState(['ASIATIC BLACK BEAR', '-','-','2022/05/15','1','Normal']);
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
        </div>                              
    )
}