import React from 'react';
import logo from '../logo.svg';
import './/pagecss/Buy.css';
import { useState, useEffect } from 'react';
import { Card, Button , Nav, Navbar, Container,ListGroup} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Caver from "caver-js";
import {ABI, CONTRACTADDRESS} from "../config";

async function GetInfo(jsonAddress){
    let Data = await axios.get(jsonAddress);
    let str = JSON.stringify(Data);
    let jsonArray = await JSON.parse(str);
    let res = jsonArray.data
    return res;
}
let caver = new Caver(window.klaytn);
let account;
async function _purchaseAnimalToken(tokenID){

    caver = new Caver(window.klaytn);
    let accounts = await window.klaytn.enable();
    account = accounts[0]
    let myContract = await new caver.klay.Contract(ABI,CONTRACTADDRESS,{from : account})
    var OnSaleAnimalTokenArrayLength = await myContract.methods.getOnSaleAnimalTokenArrayLength().call()

    console.log(OnSaleAnimalTokenArrayLength)

    var _value = await myContract.methods.animalTokenPrices(tokenID).call()/(10**18);
    console.log(_value)

    await myContract.methods.purchaseAnimalToken(tokenID).send({from: account, gas: 3000000, value: caver.utils.convertToPeb(_value, 'KLAY')})
        .then(function() {
            alert("구매가 완료 되었습니다..")
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error)
            alert("KLAY 부족 OR 이미 보유 중입니다.")
            window.location.reload();
        })

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
        if (cost == 0){
            setShow(false);
        }
    },[]);

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
                        <Card.Img className='buyNFTCardImg'variant="bottom" src={data.image} />
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
                            {show && <Button className='buyTopRightButton' variant="light" style={back_color} onClick={() =>{
                                _purchaseAnimalToken(NFTinfo.state.Nid)
                            }}>
                                구매하기
                            </Button>}
                        </div>
                    </div>
                </div>
            </div>

            <br></br>
        <br></br>
    </div>                              
    )
}