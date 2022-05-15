import React, { Component } from 'react';
import './/pagecss/Animal.css';
import { useState } from 'react';
import { Carousel, Dropdown, DropdownButton, Card, Button } from 'react-bootstrap';

export default function Animal() {
    
    let back_color = {background:"#E0FACC"}
    let [img_src,change_img] = useState("\\img\\bear.png");
    let [img_name,change_name] = useState("반달가슴곰");
    let [img_info,change_info] = useState(['ASIATIC BLACK BEAR', '25','40~200','120-190','약 25000','멸종 취약종']); //학명,예상 수명, 몸무게, 길이, 개체수
    let [img_Link,change_link] = useState("https://animalia.bio/asiatic-black-bear");
    let [fontcolor,change_color] = useState("red");
    let info5_st = {color:fontcolor, fontWeight: 'bold'};

    function to_bear(){
        change_img("\\img\\bear.png");
        change_name("반달가슴곰");
        change_info(['ASIATIC BLACK BEAR', '25','40~200','120-190','약 25000', '멸종 취약종']);
        change_color("orange");
        change_link("https://animalia.bio/asiatic-black-bear");
    }

    function to_owl(){
        change_img("\\img\\owl.png");
        change_name("수리부엉이");
        change_info(['EURASIAN EAGLE-OWL', '20~60','1.2~4.6','56~75','10만~ 50만', '멸종 관심대상종']);
        change_color("#f8db00");
        change_link("https://animalia.bio/eurasian-eagle-owl");
    };

    function to_moneky(){
        change_img("\\img\\monkey.png");
        change_name("시아우 안경원숭이");
        change_info(['SIAU ISLAND TARSIER', '10~17','0.08~0.15','10~15','1358~12470', "멸종 위급종"]);
        change_color("red");
        change_link("https://www.speciesonthebrink.org/species/siau-island-tarsier/");
    };

    function to_cheetah(){
        change_img("\\img\\cheetah.png");
        change_name("치타");
        change_info(['CHEETAH', '10~20','21-72','112-150','6674', '멸종 취약종'])
        change_color("orange");
        change_link("https://animalia.bio/cheetah");
    };

    function to_seal(){
        change_img("\\img\\seal.png");
        change_name("하프 물범");
        change_info(['HARP SEAL', '35','140~190','170~200','약 900만', '멸종 관심대상종'])
        change_color("#f8db00");
        change_link("https://animalia.bio/harp-seal");
    };

  

    return (
        <>
        <div className='Animal_frame_top'>
            <div className='A_img_card'>
                <Card>
                    <Card.Img variant="bottom" src={img_src} />
                        <Card.Body>
                            <Card.Text style={{fontWeight:"bold"}}>
                                {img_name}
                            </Card.Text>
                        </Card.Body>
                </Card>
            </div>
            
            <div className="A_txt_card">
                <div className='A_namebox'>
                    <DropdownButton id="DropdownAnimalname" variant='light' size='sm' title="이름">
                        <Dropdown.Item as="button" onClick={to_bear}>반달가슴곰</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={to_owl}>수리부엉이</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={to_moneky}>시아우안경원숭이</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={to_cheetah}>치타</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={to_seal}>하프물범</Dropdown.Item>
                    </DropdownButton> 
                </div>
                <br></br>
                <div className='A_info_card'>
                <Card>
                    <Card.Header style={back_color}>
                        소개  
                    </Card.Header>
                    <br></br>
                    <Card.Body>
                        <Card.Title>{img_name}(을)를 소개합니다!</Card.Title>
                        <br></br>
                        <Card.Text>
                            <table>
                                <tr>
                                    <th>학명</th>
                                    <td>{img_info[0]}</td>
                                </tr>
                                <tr>
                                    <th>예상 수명(년)</th>
                                    <td>{img_info[1]}</td>
                                </tr>
                                <tr>
                                    <th>몸무게(kg)</th>
                                    <td>{img_info[2]}</td>
                                </tr>
                                <tr>
                                    <th>몸길이(cm)</th>
                                    <td>{img_info[3]}</td>
                                </tr>
                                <tr>
                                    <th>개체 수(마리)</th>
                                    <td>{img_info[4]}</td>
                                </tr>
                                <tr>
                                    <th>등급</th>
                                    <td style={info5_st}>{img_info[5]}</td>
                                </tr>
                            </table>
                        </Card.Text>
                        <Button  variant="light" style={back_color} onClick={() => window.open(img_Link, '_blank')}>
                            자세히 알아보기
                        </Button>
                    </Card.Body>
                </Card>
                </div>
            </div>   
        </div>

        <br></br>
        <br></br>

        <h2>{img_name}의 NFT 보러가기</h2>
        <br></br>
        <div className='Animal_frame_bottom'>
            <div className='A_nft_card'>
                    <Card>
                        <Card.Img variant="bottom" src={img_src} />
                        <Card.Body>
                        </Card.Body>
                    </Card>
            </div>

            <div className='A_nft_card'>
                    <Card>
                        <Card.Img variant="bottom" src={img_src} />
                        <Card.Body>
                        </Card.Body>
                    </Card>
            </div>

            <div className='A_nft_card'>
                    <Card>
                        <Card.Img variant="bottom" src={img_src} />
                        <Card.Body>
                        </Card.Body>
                    </Card>
            </div>
        </div>
        </>
    );
}