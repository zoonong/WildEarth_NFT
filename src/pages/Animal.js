import React from 'react';
import './/pagecss/Animal.css';
import { useState } from 'react';
import { Carousel, Dropdown, DropdownButton, Card, Button , Nav, Navbar, Container} from 'react-bootstrap';

export default function Animal() {
    
    let back_color = {background:"#E0FACC"}
    let [img_src,change_img] = useState("\\img\\bear.png");
    let [img_real,change_real] = useState("\\img\\real_bear.png");
    let [img_name,change_name] = useState("반달가슴곰");
    let [img_info,change_info] = useState(['ASIATIC BLACK BEAR', '25년','40kg ~ 200kg','120cm ~ 190cm','약 25000마리','멸종 취약종']); //학명,예상 수명, 몸무게, 길이, 개체수
    let [img_Link,change_link] = useState("https://animalia.bio/asiatic-black-bear");
    let [fontcolor,change_color] = useState("orange");
    let [animal_info,change_animal_info] = useState(" 반달가슴곰은 아시아흑곰이라고도 불리며 검은색 털과 가슴 부위에 초승달 모양의 흰 털을 가진 곰의 일종입니다. \n\n 한국과 중국 북동부 지역, 러시아 연해주 지역에 주로 서식하지만 우리나라에서는 야생에 서식하는 반달가슴곰의 개체수는 백마리 이하로 멸종 취약종에 속해있습니다.");
    let info5_st = {color:fontcolor, fontWeight: 'bold',textAlign:'center'};

    function to_bear(){
        change_img("\\img\\bear.png");
        change_real("\\img\\real_bear.png");
        change_name("반달가슴곰");
        change_info(['ASIATIC BLACK BEAR', '25년','40kg ~ 200kg','120cm ~ 190cm','약 25000마리', '멸종 취약종']);
        change_color("orange");
        change_link("https://animalia.bio/asiatic-black-bear");
        change_animal_info(" 반달가슴곰은 아시아흑곰이라고도 불리며 검은색 털과 가슴 부위에 초승달 모양의 흰 털을 가진 곰의 일종입니다. \n\n 한국과 중국 북동부 지역, 러시아 연해주 지역에 주로 서식하지만 우리나라에서는 야생에 서식하는 반달가슴곰의 개체수는 백마리 이하로 멸종 취약종에 속해있습니다.");
    }

    function to_owl(){
        change_img("\\img\\owl.png");
        change_real("\\img\\real_owl.png");
        change_name("수리부엉이");
        change_info(['EURASIAN EAGLE OWL', '20년 ~ 60년','1.2kg ~ 4.6kg','56cm ~ 75cm','10만마리 ~ 50만마리', '멸종 관심대상종']);
        change_color("#f8db00");
        change_link("https://animalia.bio/eurasian-eagle-owl");
        change_animal_info(" 수리부엉이는 부엉이 중 가장 크고 세며 야행성인 올빼미과의 맹금류입니다. \n\n 한국과 중국을 포함한 동아시아, 유럽 전역에 분포되어 있지만 우리나라에서는 멸종위기 2급으로 지정된 천연기념물입니다.");
    };

    function to_moneky(){
        change_img("\\img\\monkey.png");
        change_real("\\img\\real_monkey.png");
        change_name("시아우 안경원숭이");
        change_info(['SIAU ISLAND TARSIER', '10년 ~ 17년','80g ~ 150g','10cm ~ 15cm','1358마리 ~ 12470마리', "멸종 위급종"]);
        change_color("red");
        change_link("https://www.speciesonthebrink.org/species/siau-island-tarsier/");
        change_animal_info(" 시아우 안경원숭이는 인도네시아의 시아우섬에 사는 안경원숭이며 영장류 중 가장 작고 유일하게 육식을 하는 원숭이입니다. \n\n 시아우 섬에만 서식하고 있으며 개체수가 매우 적고 섬 원주민에 의해 매년 줄고 있어 세계에서 가장 멸종위기에 처한 동물 중 하나입니다.");
    };

    function to_cheetah(){
        change_img("\\img\\cheetah.png");
        change_real("\\img\\real_cheetah.png");
        change_name("치타");
        change_info(['CHEETAH', '10년 ~ 20년','21kg ~ 72kg','112cm ~ 150cm','6674마리', '멸종 취약종'])
        change_color("orange");
        change_link("https://animalia.bio/cheetah");
        change_animal_info(" 치타는 지상에서 가장 빠른 생물이며 검은 점박이 무늬가 특징인 고양잇과 동물입니다. \n\n 대부분이 사하라 이남 아프리카에 서식하며 치타의 무늬를 노린 밀렵꾼들의 사냥이나 사자나 표범 등과의 경쟁으로 향후 멸종 가능성이 매우 높은 동물 중 하나입니다.");
    };

    function to_seal(){
        change_img("\\img\\seal.png");
        change_real("\\img\\real_seal.png");
        change_name("하프 물범");
        change_info(['HARP SEAL', '35년','140kg ~ 190kg','170cm ~ 200cm','약 900만마리', '멸종 관심대상종'])
        change_color("#f8db00");
        change_link("https://animalia.bio/harp-seal");
        change_animal_info(" 하프 물범은 크면 하프 무늬가 생기는 특징을 가진 물범과의 포유류입니다. \n\n 환경오염으로 인한 서식지 파괴나 사냥꾼들의 무분별한 사냥으로 개체수가 줄고 있는 멸종 관심 대상종 입니다.");
    };

  

    return (
        <>
        <div className='Animal_frame_top'>
            <div className='animalInfoLeft'>
                <div className='animalName'>
                    <br></br>
                    {img_name}
                </div>
                <div className='animalInfoLeftLine'>
                </div>
                <div className='animalText'>
                    {animal_info}
                </div>
            </div>
            
            <div className='A_img_card'>
                <Card className='animalImg'>
                    <Card.Img variant="bottom" src={img_src} />
                        <Card.Body>
                            <Card.Text style={{fontWeight:"bold"}}>
                               
                            </Card.Text>
                        </Card.Body>
                </Card>
            </div>
            <div className='animalInfoRight'>
                <div className='animalCard'>
                    <Card >
                        <Card.Img variant="bottom" src={img_real} />
                    </Card>
                </div>
                <div className='animalDetail'>
                 <table className='table_A'>
                    <tr>
                        <th className='th_1'>학명</th>
                        <td className='td_1'>{img_info[0]}</td>
                    </tr>
                    <tr>
                        <th className='th_1'>예상 수명</th>
                        <td className='td_1'>{img_info[1]}</td>
                    </tr>
                    <tr>
                        <th className='th_1'>몸무게</th>
                        <td className='td_1'>{img_info[2]}</td>
                    </tr>
                    <tr>
                        <th className='th_1'>몸길이</th>
                        <td className='td_1'>{img_info[3]}</td>
                    </tr>
                    <tr>
                        <th className='th_1'>개체 수</th>
                        <td className='td_1'>{img_info[4]}</td>
                    </tr>
                    <tr>
                        <th className='th_1'>등급</th>
                        <td style={info5_st}>{img_info[5]}</td>
                    </tr>
                    </table>
                </div>
            </div>
        </div>

        <br></br>
        <br></br>

        <br></br>
        <div className='Animal_frame_bottom'>
            <div className='A_nft_card'>
                    <Card onClick={to_bear}>
                        <Card.Img variant="bottom" src='\img\bear.png' />
                        <Card.Body>
                            반달가슴곰의 정보 보기
                        </Card.Body>
                    </Card>
            </div>
            <div className='A_nft_card'>
                    <Card onClick={to_owl}>
                        <Card.Img variant="bottom" src='\img\owl.png' />
                        <Card.Body>
                            수리부엉이의 정보 보기
                        </Card.Body>
                    </Card>
            </div>
            <div className='A_nft_card'>
                    <Card onClick={to_moneky}>
                        <Card.Img variant="bottom" src='\img\monkey.png' />
                        <Card.Body>
                            시아우 안경원숭이의 정보 보기
                        </Card.Body>
                    </Card>
            </div>
            <div className='A_nft_card'>
                    <Card onClick={to_cheetah}>
                        <Card.Img variant="bottom" src='\img\cheetah.png' />
                        <Card.Body>
                            치타의 정보 보기
                        </Card.Body>
                    </Card>
            </div>
            <div className='A_nft_card'>
                    <Card onClick={to_seal}>
                        <Card.Img variant="bottom" src='\img\seal.png' />
                        <Card.Body>
                            물범의 정보 보기
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