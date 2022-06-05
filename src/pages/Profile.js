import React from 'react';
import logo from '../logo.svg';
import './/pagecss/Profile.css';
import { useState, useEffect, useRef } from 'react';
import { Card, Button , Nav, Navbar, Container,Form, Badge} from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import axios from 'axios';
import {CONTRACTADDRESS, ABI} from '../config';
import Caver from 'caver-js';
import {ACCESS_KEY_ID, SECRET_ACCESS_KEY} from '../apikey';


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



function NFT_sell(props) {
    let [sellstate, setSellstate] = useState(null);
    let [NFTPrice, setPrice] = useState(null);

    useEffect(()=>{
        async function check_sellstate(){
            caver = new Caver(window.klaytn);
            let accounts = await window.klaytn.enable();
            account = accounts[0]
            let myContract = new caver.klay.Contract(ABI,CONTRACTADDRESS,{from : account})

            let result = await myContract.methods.animalTokenPrices(props.NFT_number).call()
            setPrice(result);
        };
        check_sellstate();
    },[]);

    useEffect(()=>{
        if(!NFTPrice){
            setSellstate(null);
        }else if(NFTPrice == 0){
            setSellstate(0);
        }else{
            setSellstate(1);
        }
    },[NFTPrice]);

    //sell
    async function _sell(NFT_number,cost){
        cost = Number(cost)
        caver = new Caver(window.klaytn);
        let accounts = await window.klaytn.enable();
        account = accounts[0]
        let myContract = new caver.klay.Contract(ABI,CONTRACTADDRESS,{from : account})

        let animalTokenPrices = await myContract.methods.animalTokenPrices(NFT_number).call();
        // console.log(animalTokenPrices)

        myContract.options.address=CONTRACTADDRESS

        await myContract.methods.setForSaleAnimalToken(NFT_number,cost).send({from: account, gas: 3000000})
            .then(function() {
                console.log(animalTokenPrices)
                alert("판매등록이 완료 되었습니다.")
                window.location.reload();
            })
            .catch(function (e) {
                console.log(e)
                alert("Error 재접속 후 다시 시도해 주세요..")
                window.location.reload();
            })

    }
    //cancel
    async function _cancel(NFT_number){

        caver = new Caver(window.klaytn);
        let accounts = await window.klaytn.enable();
        account = accounts[0]
        let myContract = new caver.klay.Contract(ABI,CONTRACTADDRESS,{from : account})

        let animalTokenPrices = await myContract.methods.animalTokenPrices(NFT_number).call();
        // console.log(animalTokenPrices)

        myContract.options.address=CONTRACTADDRESS

        await myContract.methods.cancelSaleToken(NFT_number).send({from: account, gas: 3000000})
            .then(function() {
                alert("판매가 취소 완료 되었습니다.")
                window.location.reload();
            })
            .catch(function (e) {
                console.log(e)
                alert("Error")
                window.location.reload();
            })

    }


    if(sellstate==0){
        return(
         <div>
            <Form.Group className="mb-3">
                <Form.Control placeholder="COST(KLAY)" id="cost" type="number"/>
            </Form.Group>
            <Button  variant="light" style={back_color} onClick={() => {
                _sell(props.NFT_number,document.getElementById("cost").value)
            }}>
                Sell
            </Button>
        </div>
        );
    }else if(sellstate==1){
        return(
        <div>
            <Button  variant="danger" onClick={() => {
                _cancel(props.NFT_number)
            }}> Cancel </Button>
        </div>
        );
    }else{
        return null;
    }
   
};


const myNFT = async () => {
    caver = new Caver(window.klaytn);
    let accounts = await window.klaytn.enable();
    account = accounts[0]
    let myContract = new caver.klay.Contract(ABI,CONTRACTADDRESS,{from : account})

    var tokenIDs = []
    var animalName = []
    var tokenURIs = []
    var tokenimg = []
    var nftprice = []
    var nfts = []
    var index = 0
    var my_last = 0
    await myContract.methods.balanceOf(account).call()
    .then(function(result){
        my_last = result;
    });


    while(index<my_last){
        await myContract.methods.tokenOfOwnerByIndex(account,index).call() // 본인 소유 NFT 확인
        .then(function(result) {
            tokenIDs.push(result);
            index +=1;
        }) 
        .catch(function (error) {
            console.log(error); 
        });
    }

    for (var i = 0; i<tokenIDs.length; i++){
        // NFT 가격
        const nftPrice = await myContract.methods.animalTokenPrices(tokenIDs[i]).call();
        nftprice.push(nftPrice);
        // NFT 이미지
        const nftImg = await myContract.methods.tokenURI(tokenIDs[i]).call();
        fetch(nftImg)
        .then(res => res.json())
        .then((out) => {
            tokenimg.push(out.image)
        })
        // NFT 이름
        const nftNm = await myContract.methods.tokenURI(tokenIDs[i]).call();
        fetch(nftNm)
        .then(res => res.json())
        .then((out) => {
            animalName.push(out.attributes[1].value)
        })
        // NFT JSON URI
        const nftURI = await myContract.methods.tokenURI(tokenIDs[i]).call();
        tokenURIs.push(nftURI);

        nfts.push({id : tokenIDs[i], uri: tokenURIs[i], image: tokenimg[i], name: animalName[i], price: nftprice[i]});
        

    }
    
    // console.log(nfts);
    return nfts;
}



function NFTList({NFT_name, NFT_url, NFT_number,NFT_price}){
    let [show,setshow] = useState(false);
    let [sellstate, setSellstate] = useState(null);


    useEffect(()=>{
        if(!NFT_price){
            setSellstate(null);
        }else if(NFT_price == 0){
            setSellstate(false);
        }else{
            setSellstate(true);
        }
    },[NFT_price]);

    return(
        <div className='profileImg'>
            <Card className='profileCard'>
                <Card.Img variant="bottom" src={NFT_url}  onClick={()=>{setshow(!show);}} />
                <Card.Body className='profileCardBody' onClick={()=>{setshow(!show);}}>
                    <Card.Text style={{fontWeight:"bold",fontSize:"20px",textAlign:"left"}}>
                        #{NFT_number} : {NFT_name}
                        {sellstate && <Badge bg="warning" text="dark" style={{marginLeft : "10px"}}>판매 중!</Badge> }
                        <br/>
                    </Card.Text>
                </Card.Body>
                <Card.Footer  style={{background:"#f8fdf8"}}>
                    {show && <NFT_sell NFT_number={NFT_number}/>}
                </Card.Footer>
            </Card>
        </div>
    );



    
}


function Profile() {
    let myContract;

    let accounts;
    const [nfts, setNfts] = useState([]);
    const allnfts = async () => {
        const _nfts = await myNFT();
        setNfts(_nfts);
    }
    
 


    //mint function
    async function _mint(walletAddress, jsonAddress){
        caver = new Caver(window.klaytn);
        accounts = await window.klaytn.enable();
        account = accounts[0]
        myContract = new caver.klay.Contract(ABI,CONTRACTADDRESS,{from : account})


        myContract.options.address=CONTRACTADDRESS
        await myContract.methods.airDropMint(walletAddress, jsonAddress).send({from: account, gas: 3000000})
            .then(function() {
                alert('민팅이 완료되었습니다.')
                window.location.reload();
            })
            .catch(function () {
                alert("관리자가 아닙니다.")
                    window.location.reload();
            })

        // const totalSupply = await myContract.methods.totalSupply().call();

    }
    

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
                <div className='tapLine' style={{fontWeight:"bold",fontSize:"50px",textAlign:"left"}} onClick={allnfts()}>
                    COLLECTED
                </div>
                <div className='profileList'>
                    <>
                    {nfts.map((nft, index) => (
                        <NFTList NFT_url = {nfts[index].image} NFT_number = {nfts[index].id} NFT_name = {nfts[index].name} NFT_price = {nfts[index].price}/>

                    )
                    )}
                    </>
    
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