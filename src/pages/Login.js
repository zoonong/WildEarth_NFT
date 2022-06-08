// import React from 'react';
// import logo from '../logo.svg';
// import './/pagecss/Profile.css';
// import { useState, useEffect, useRef } from 'react';
// import { Carousel, Dropdown, DropdownButton, Card, Button , Nav, Navbar, Container,Form} from 'react-bootstrap';
// import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
// import axios from 'axios';
// import {CONTRACTADDRESS, ABI} from '../config';
// import Caver from 'caver-js';

// var profile_name = 'DEFAULT_NAME'
// var profile_no = '0000'
// // var wallet_address = account

// let back_color = {background:"#E0FACC"}
// let account;


// // Solidity
// const CHAIN_ID = '1001'; //테스트넷

// async function GetInfo(jsonAddress){
//     let Data = await axios.get(jsonAddress);
//     let str = JSON.stringify(Data);
//     let jsonArray = await JSON.parse(str);
//     let res = jsonArray.data
//     console.log(res)
//     return res;
// }


// function ShowNFT({NFT_url,NFT_number}){
//     let [show,setshow] = useState(false);
//     let [data,setData] = useState(null);

//     useEffect(()=>{
//         const info = async()=>{
//             const arr = await GetInfo(NFT_url);
//             console.log(arr);
//             setData(arr);
//         }
//         info();
//     },[]);
   
//     if(!data){
//         return null;
//     }
//     return(
//         <div className='profileImg'>
//             <Card className='profileCard'>
//                 <Card.Img variant="bottom" src={data.image}  onClick={()=>{setshow(!show);}} />
//                 <Card.Body className='profileCardBody' onClick={()=>{setshow(!show);}}>
//                     <Card.Text style={{fontWeight:"bold",fontSize:"20px",textAlign:"left"}}>
//                         #{NFT_number}
//                         <br/>
//                     </Card.Text>
//                 </Card.Body>
//                 <Card.Footer  style={{background:"#f8fdf8"}}>
//                     {/* {show && <NFT_sell NFT_number={NFT_number}/>} */}
//                 </Card.Footer>
//             </Card>
//         </div>
//     );

// };


// function Login() {
//     const Information = [
//         {
//             T_ID : '7',
//             T_URI : "https://metadata-store.klaytnapi.com/9a3233de-9aa6-694c-df21-50632eee371e/fee0c422-6826-47c5-f3db-539df3c57e89.json"
//         },
//         {
//             T_ID :'8',
//             T_URI :'https://metadata-store.klaytnapi.com/9a3233de-9aa6-694c-df21-50632eee371e/47e24e0b-4ebe-6e24-5a95-cf89bc329ee7.json'
//         }
//     ];
    
//     return(
//         <div>
//             {Information.map(NFT=>(
//                 <div key = {NFT.T_ID}>
//                     <ShowNFT NFT_url={NFT.T_URI} NFT_number = {NFT.T_ID}/>
//                 </div>
//         ))}
//         </div>
//     )
// }

//    export default Login;