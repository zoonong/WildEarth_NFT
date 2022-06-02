import { useState, useEffect } from 'react';
import React from 'react';
import logo from '../logo.svg';

import { Carousel,Navbar,Container, Nav, NavDropdown, Card,DropdownButton, Dropdown } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link, useNavigate} from 'react-router-dom';

import axios from 'axios';
import './/pagecss/Explore.css';
import {ACCESS_KEY_ID, SECRET_ACCESS_KEY} from '../apikey';
import Caver from 'caver-js';
import '../App.css';
import {CONTRACTADDRESS, ABI} from '../config';

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
const NFTContract = new caver.contract(ABI, CONTRACTADDRESS);

// const TotalNFT = async () => {
//     const total = await NFTContract.methods.totalSupply().call();
//     console.log(total);
//     var tokenIDs = []
//     var tokenURIS = []
//     var tokenJson = []
//     var nfts = []
//     for (var i = 0; i<total; i++){
//         const nftIndex = await NFTContract.methods.tokenByIndex(i).call();
//         tokenIDs.push(nftIndex);
//     }
//     for (var i = 0; i < tokenIDs.length; i++){
//         const nftURI = await NFTContract.methods.tokenURI(tokenIDs[i]).call();
//         tokenURIS.push(nftURI);
//     }

//     for (var i = 0; i < tokenURIS.length+1; i++){
//         fetch(tokenURIS[i])
//         .then(res => res.json())
//         .then((out) => {
//             tokenJson.push(out.image)
//         })
//     }

//     // var request = new XMLHttpRequest();
//     // for (var i = 0; i < tokenURIS.length; i++){
//     //     request.open('GET', tokenURIS[i]);
//     //     request.responseType = 'json';
//     //     request.send();
//     //     request.onload = function() {
//     //         var jsontext = request.response;
//     //         tokenJson.push(jsontext);
//     //     }
//     // }

//     for (var i = 0; i < tokenIDs.length; i++){
//         nfts.push({id : tokenIDs[i], uri: tokenURIS[i]});
//     }
//     console.log(tokenJson);
//     console.log(nfts);
//     return nfts;
// }

async function GetInfo(jsonAddress){
    let Data = await axios.get(jsonAddress);
    let str = JSON.stringify(Data);
    let jsonArray = await JSON.parse(str);
    let res = jsonArray.data
    return res;
}

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


function NFTList({NFT_url,NFT_number,NFT_price}){
    let [data,setData] = useState(null);
    let [att, setAtt] = useState(null);
    let cost = NFT_price/(10**18);
    let [show, setShow] = useState(true);

    useEffect(()=>{
        const info = async()=>{
            const arr = await GetInfo(NFT_url);
            setData(arr);
            const arr1 = Object.values(arr.attributes);
            console.log(arr1);
            setAtt(arr1[1].value);
        }
        info(); 
        if (cost == 0){
            setShow(false);
        }
    },[]);

   

    if(!data || !att){
        return null;
    }
    
    return(
        <div className='marketImg'>
            <Card className='marketCard'>
                <Card.Img variant="bottom" src={data.image}/>
                <Card.Body className='marketCardBody'>
                    <Card.Text style={{fontWeight:"bold",fontSize:"30px",textAlign:"left"}}>
                        {att}
                        <br/>
                        #{NFT_number}
                    </Card.Text>
                    {show && <Card.Text style={{fontWeight:"",fontSize:"20px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                        PRICE 
                        <br/>
                        {cost} KLAY
                    </Card.Text>}
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
    const [nfts, setNfts] = useState(null);

    // const allnfts = async () => {
    //     const _nfts = await TotalNFT();
    //     setNfts(_nfts);
    // }

    let myContract;

    let accounts;
    let account;
    let [TotalObject,setToken_Total] = useState(null);
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
            await myContract.methods.onSaleAnimalTokenArray(index).call()
            .then(function(result){
                token_temp.push(result);
                index += 1;
            })
            .catch(function (error){
                console.log(error)
            });
        }
        for (var i of token_temp){
            var token_one = new Object();
            await myContract.methods.tokenURI(i).call()
            .then(function(result){
                
                token_one['T_ID'] = i;
                token_one['T_URI'] = result;
                
            });

            await myContract.methods.animalTokenPrices(i).call()
            .then(function(result){
                token_one['T_Price'] = result;
                token_sale.push(token_one);
            })
        }
        setSale_Object(token_sale);
        // console.log(SaleObject);


    }

    async function check_total(){

        accounts = await window.klaytn.enable();
        account = accounts[0];
        myContract = new caver.contract(ABI, CONTRACTADDRESS);
 
        

        // 전체 NFT 확인

        var last = 0;
        let token_object = [];

        await myContract.methods.totalSupply().call() // 전체 NFT 개수 확인
            .then(function(result){
                last = result;
        });

    

        for (var i =1; i<= last; i++){
            var token_one = new Object();
            await myContract.methods.tokenURI(i).call()
            .then(function(result){
                
                token_one['T_ID'] = i;
                token_one['T_URI'] = result;
                
            });
            await myContract.methods.animalTokenPrices(i).call()
            .then(function(result){
                token_one['T_Price'] = result;
                token_object.push(token_one);
            });
        }
        setToken_Total(token_object);
    }
    check_total(); // TotalObject 에 담김
    check_onsale(); // SaleObject 에 담김
    
    

    function numberSort(){
        
    }
    function lowerPriceSort(){
        
    }
    function HigherPriceSort(){
        
    }

    if(!TotalObject){
        return null;
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
                    {TotalObject.map(NFT=>(
                    <Link to={`/Buy/${NFT.T_ID}`} style={{textDecoration: 'none', color:'black'}} state={{jsonAddress : NFT.T_URI, Cost : NFT.T_Price, Nid : NFT.T_ID}}>
                        <NFTList NFT_url={NFT.T_URI} NFT_number={NFT.T_ID} NFT_price={NFT.T_Price}/>
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