import { useState } from 'react';
import React from 'react';
import logo from '../logo.svg';

import { Carousel,Navbar,Container, Nav, NavDropdown, Card,DropdownButton, Dropdown } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link, useNavigate} from 'react-router-dom';

import {ACCESS_KEY_ID, SECRET_ACCESS_KEY} from '../apikey';
import Caver from 'caver-js';
import {CONTRACTADDRESS, ABI} from '../config';
import axios from 'axios';
import './/pagecss/Explore.css';

const CHAIN_ID = '1001'; //테스트넷



const option = {
    headers: [
      {
        name: "Authorization",
        value: "Basic " + Buffer.from(ACCESS_KEY_ID +":"+ SECRET_ACCESS_KEY).toString("base64")
      },
      {name: "x-chain-id", value:CHAIN_ID}
    ]
  }

let caver = new Caver(new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn",option));

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
    
    return(
        <div className='marketImg'>
            <Card className='marketCard'>
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

    return(
        <div className='rankingImg'>
            <Card className='rankingCard'>
                <Card.Img variant="bottom" src={NFT_url}/>
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

    let myContract;

    let accounts;
    let account;
    let [TotalObject,setToken_Total] = useState([]);
    let [SaleObject, setSale_Object] = useState([]);

    async function check_onsale(){
        accounts = await window.klaytn.enable();
        account = accounts[0];


        var last = 0;
        var token_sale = [];
        var index = 0;
        myContract = new caver.contract(ABI, CONTRACTADDRESS);
        var token_temp = [];

        await myContract.methods.getOnSaleAnimalTokenArrayLength().call() // 전체 NFT 개수 확인
            .then(function(result){
                last = result;
        });
        while(index<last){
            await myContract.methods.getOnSaleAnimalToken(index).call()
            .then(function(result){
                token_temp.push(result);
                index += 1;
            })
            .catch(function (error){
                console.log(error)
            });
        }
        for (var i of token_temp){
            await myContract.methods.tokenURI(i).call()
            .then(function(result){
                var token_one = new Object();
                token_one['T_ID'] = i;
                token_one['T_URI'] = result;
                token_sale.push(token_one);
            });
        }
        setSale_Object(token_sale);
        console.log(SaleObject);


    }

    async function check_total(){

        accounts = await window.klaytn.enable();
        account = accounts[0];
        myContract = new caver.contract(ABI, CONTRACTADDRESS);

        // 소유권 확인

        var last = 0;
        let token_object = [];

        await myContract.methods.totalSupply().call() // 전체 NFT 개수 확인
            .then(function(result){
                last = result;
        });

    

        for (var i =1; i<= last; i++){
            await myContract.methods.tokenURI(i).call()
            .then(function(result){
                var token_one = new Object();
                token_one['T_ID'] = i;
                token_one['T_URI'] = result;
                token_object.push(token_one);

            });
        }
        setToken_Total(token_object);
        // console.log(TotalObject);
    }
    check_total();
    check_onsale();

    

    function numberSort(){
        
    }
    function lowerPriceSort(){
        
    }
    function HigherPriceSort(){
        
    }

    return (
        <>
        <div className='exploreBack'>
            <div className='rankingBack'>
                <div className='rankingTxt' style={{textAlign:"left",fontWeight:"bold"}}>
                    RANKING
                </div>

                <div className='rankingList'>
                    {RankItem.map(item=>(
                    <Link to={`/Buy/${item.Num_}`} style={{textDecoration: 'none', color:'black'}} state={{Nname : item.NAME, Src : item.URL_, Cost : item.Price, Nid : item.Num_}}>
                        <Ranking NFT_name={item.NAME} NFT_url={item.URL_}/>
                    </Link>
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
                    <Link to={`/Buy/${NFT.Num_}`} style={{textDecoration: 'none', color:'black'}} state={{Nname : NFT.NAME, Src : NFT.URL_, Cost : NFT.Price, Nid : NFT.Num_}}>
                        <NFTList NFT_name={NFT.NAME} NFT_url={NFT.URL_} NFT_number={NFT.Num_} NFT_price={NFT.Price}/>
                    </Link>))}
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
        </>
    );
}

export default Explore;