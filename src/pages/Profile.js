import React from 'react';
import logo from '../logo.svg';
import './/pagecss/Profile.css';
import { useState, useEffect } from 'react';
import { Carousel, Dropdown, DropdownButton, Card, Button , Nav, Navbar, Container,Form} from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import axios from 'axios';
import {CONTRACTADDRESS, ABI} from '../config';
import Caver from 'caver-js';
import {ACCESS_KEY_ID, SECRET_ACCESS_KEY} from '../apikey';

var profile_name = 'DEFAULT_NAME'
var profile_no = '0000'
// var wallet_address = account

let back_color = {background:"#E0FACC"}
let account;


// Solidity
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



function NFT_sell() {
    //sell
    async function _sell(){
        caver = new Caver(window.klaytn);
        let accounts = await window.klaytn.enable();
        account = accounts[0]
        let myContract = await new caver.klay.Contract(ABI,CONTRACTADDRESS,{from : account})

        let animalTokenPrices = await myContract.methods.animalTokenPrices(1).call();
        console.log(animalTokenPrices)

        myContract.options.address=CONTRACTADDRESS
        await myContract.methods.setForSaleAnimalToken(1,1).send({from: account, gas: 3000000})

        animalTokenPrices = await myContract.methods.animalTokenPrices(1).call();
        console.log(animalTokenPrices)
        alert("판매가 완료 되었습니다.")
    }

    return(
        <div>
            <Form.Group className="mb-3">
                <Form.Control placeholder="COST(KLAY)" />
            </Form.Group>
            <Button  variant="light" style={back_color} onClick={_sell}>
                Sell
            </Button>
        </div>
    );
};

function ShowNFT({NFT_name,NFT_url,NFT_number}){ 
    let [show,setshow] = useState(false);

    return(
        <div className='profileImg'>
            <Card className='profileCard'>
                <Card.Img variant="bottom" src={NFT_url}  onClick={()=>{setshow(!show);}} />
                <Card.Body className='profileCardBody' onClick={()=>{setshow(!show);}}>
                    <Card.Text style={{fontWeight:"bold",fontSize:"20px",textAlign:"left"}}>
                        #{NFT_number} : {NFT_name}
                        <br/>
                    </Card.Text>
                </Card.Body>
                <Card.Footer  style={{background:"#f8fdf8"}}>
                    {show && <NFT_sell/>}
                </Card.Footer>
            </Card>
        </div>
    );

};
// const Collected_NFT = [
//     {
//         NAME: "반달가슴곰",
//         URL_: "\\img\\bear.png",
//         Num_: "1" 
//     },
//     {
//         NAME: "수리부엉이",
//         URL_: "\\img\\owl.png",
//         Num_: "2" 
//     },
//     {
//         NAME: "하프물범",
//         URL_: "\\img\\seal.png",
//         Num_: "3" 
//     },
//     {
//         NAME: "반달가슴곰",
//         URL_: "\\img\\bear.png",
//         Num_: "4" 
//     },
//     {
//         NAME: "수리부엉이",
//         URL_: "\\img\\owl.png",
//         Num_: "5" 
//     },
//     {
//         NAME: "하프물범",
//         URL_: "\\img\\seal.png",
//         Num_: "6" 
//     }   
// ];



function Profile() {

    // let [myToken,setToken] = useState([]);
    // let [myTokenURI,setTokenURI] = useState([]);
    let [TokenObject,setToken_Object] = useState([]);
    let myContract;

    let accounts;

    //mint function
    async function _mint(walletAddress, jsonAddress){
        caver = new Caver(window.klaytn);
        accounts = await window.klaytn.enable();
        account = accounts[0]
        myContract = await new caver.klay.Contract(ABI,CONTRACTADDRESS,{from : account})
        console.log(myContract)

        myContract.options.address=CONTRACTADDRESS
        await myContract.methods.airDropMint(walletAddress, jsonAddress).send({from: account, gas: 3000000})

        const totalSupply = await myContract.methods.totalSupply().call();
        console.log(totalSupply)

        document.getElementById("walletAddress").value = null
        document.getElementById("JSON_URL").value = null

        alert("민팅이 완료 되었습니다.")
    }
    
    async function check_wallet(){

        accounts = await window.klaytn.enable();
        account = accounts[0];
        myContract = new caver.contract(ABI, CONTRACTADDRESS);

        // 소유권 확인
        let index = 0;
        let last = 0;
        let token_temp = [];
        let token_object = [];

        await myContract.methods.balanceOf(account).call() // 본인 소유 NFT 개수 확인
            .then(function(result){
                last = result;
            });

        while(index<last){
            await myContract.methods.tokenOfOwnerByIndex(account,index).call() // 본인 소유 NFT 확인
            .then(function(result) {
                token_temp.push(result);
                index +=1;
            }) 
            .catch(function (error) {
                console.log(error); 
            });
        }


        for (var i of token_temp){
            await myContract.methods.tokenURI(i).call()
            .then(function(result){
                var token_one = new Object();
                token_one['T_ID'] = i;
                token_one['T_URI'] = result;
                token_object.push(token_one);
            });

            
        }
        setToken_Object(token_object);
        // setToken(token_temp);
        // setTokenURI(tokenURI_temp);
        
    }

    //check_wallet();
    
    // console.log(myToken);
    // console.log(myTokenURI);
    console.log(TokenObject)


    var [data, setData] = useState(["team3"]);
    const url = "https://metadata-store.klaytnapi.com/9a3233de-9aa6-694c-df21-50632eee371e/f8dc0fb7-4d95-1884-5350-e783905517d2.json";

    useEffect(()=>{
      axios.get(url).then(function(response) {
        setData(response.data);
    });
    },[]);

    var arr = Object.values(data)

    const Collected_NFT = [{
        NAME: arr[0][1].value,
        URL_: data.image,
        NUM_: data.edition
        // Hat : arr[0][2].value,
        // Necklace : arr[0][3].value,
        // BG : arr[0][0]
        
    }]




    return (
        <>
        <div className='profileBack'>
            <div className='profileLeft'>
                <div className='proflieName'>
                    마이페이지
                </div>
                {/* <div className='proflieName'>
                    {profile_name}
                </div>
                <div className='profileNo'>
                    #{profile_no}
                </div>
                <div className='wallet'>
                    <h2>
                        WALLET ADDRESS
                    </h2>
                </div> */}
                {/* <div className='walletAddress'>
                    <p>
                        {account}
                    </p>
                    
                </div> */}
                <br></br>
                <br></br>
                <div className='Mint_div'>
                    <Form.Group className="mb-3">
                        <Form.Label>Wallet address</Form.Label>
                        <Form.Control placeholder="Wallet address" id="walletAddress"/>
                        <Form.Text className="text-muted">
                            Wallet address 입력
                        </Form.Text>
                        <br/>
                        <Form.Label>JSON address</Form.Label>
                        <Form.Control placeholder="JSON_URL" id="JSON_URL"/>
                        <Form.Text className="text-muted">
                            Minting할 NFT JSON URL 입력
                        </Form.Text>
                    </Form.Group>
                    <Button  variant="light" style={back_color} onClick={()=>{
                        _mint(document.getElementById("walletAddress").value,document.getElementById("JSON_URL").value)
                    }}>
                        Mint New NFT
                    </Button>
                </div>
            </div>

            <div className='profileRight'>
                <div className='tapLine' style={{fontWeight:"bold",fontSize:"50px",textAlign:"left"}}>
                    COLLECTED
                </div>
                <div className='profileList'>
                    {Collected_NFT.map(NFT=>(
                        <ShowNFT NFT_name={NFT.NAME} NFT_url={NFT.URL_} NFT_number={NFT.NUM_}/>
                    ))}
                </div>
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
        </>
    );
}

export default Profile;