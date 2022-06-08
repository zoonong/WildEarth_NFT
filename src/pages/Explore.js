import { useState, useEffect,} from 'react';
import React from 'react';
import logo from '../logo.svg';

import { Card,DropdownButton, Dropdown, Spinner, Badge } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './/pagecss/Explore.css';
import Caver from 'caver-js';
import '../App.css';
import {CONTRACTADDRESS, ABI} from '../config';

const CHAIN_ID = '1001'; //테스트넷

const option = {
  headers: [
    {
      name: "Authorization",
      value: "Basic " + Buffer.from(process.env.REACT_APP_ACCESS_KEY_ID +":"+ process.env.REACT_APP_SECRET_ACCESS_KEY).toString("base64")
    },
    {name: "x-chain-id", value:CHAIN_ID}
  ]
}

const caver = new Caver(new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn",option));
const NFTContract = new caver.contract(ABI, CONTRACTADDRESS);

// 준비용
const TotalNFT = async () => {
    const total = await NFTContract.methods.totalSupply().call();
    // console.log(total);
    var tokenIDs = []
    var animalName = []
    var tokenURIs = []
    var tokenimg = []
    var nftprice = []
    var nfts = []
    for (var i = 0; i<total; i++){
        // 토큰 ID
        const nftIndex = await NFTContract.methods.tokenByIndex(i).call();
        tokenIDs.push(nftIndex);
    }

    for (var i = 0; i<tokenIDs.length; i++){
        // NFT 가격
        const nftPrice = await NFTContract.methods.animalTokenPrices(tokenIDs[i]).call();
        nftprice.push(nftPrice);
        // NFT 이미지
        const nftImg = await NFTContract.methods.tokenURI(tokenIDs[i]).call();
        fetch(nftImg)
        .then(res => res.json())
        .then((out) => {
            tokenimg.push(out.image)
        })
        // NFT 이름
        const nftNm = await NFTContract.methods.tokenURI(tokenIDs[i]).call();
        fetch(nftNm)
        .then(res => res.json())
        .then((out) => {
            animalName.push(out.attributes[1].value)
        })
        // NFT JSON URI
        const nftURI = await NFTContract.methods.tokenURI(tokenIDs[i]).call();
        tokenURIs.push(nftURI);

        nfts.push({id : tokenIDs[i], uri: tokenURIs[i], image: tokenimg[i], name: animalName[i], price: nftprice[i]});
        

    }
    
    // console.log(nfts);
    return nfts;
}

function NFTList({NFT_name,NFT_url,NFT_number,NFT_price}){ 
    let cost = NFT_price/(10**18);
    let [show, setShow] = useState(true);
    useEffect(()=>{
        if (cost != 0){
            setShow(true);
        }else{
            setShow(false);
        }
    });

    return(
        <div className='marketImg'>
            <Card className='marketCard'>
                <Card.Img variant="bottom" src={NFT_url} />
                <Card.Body className='marketCardBody'>
                    <Card.Text className='marketCardTitle' style={{fontWeight:"bold",fontSize:"30px",textAlign:"left"}}>
                        {NFT_name}
                        <br/>
                        #{NFT_number}
                    </Card.Text>
                    {show && 
                    <Card.Text className='marketCardPrice'style={{fontWeight:"",fontSize:"20px",textAlign:"right",marginLeft:"30%",marginTop:"7%"}}>
                        PRICE 
                        <br/>
                        {cost} KLAY
                    </Card.Text>}
                </Card.Body>
            </Card>    
        </div>
    );
};

function Ranking({NFT_name,NFT_url, NFT_price, NFT_number}){
    let cost = NFT_price/(10**18);
    let [show, setShow] = useState(true);
    useEffect(()=>{
        if (cost != 0){
            setShow(true);
        }else{
            setShow(false);
        }
    });
    
    return(
        <div className='rankingImg'>
            <Card className='rankingCard'>
                <Card.Img variant="bottom" src={NFT_url}/>
                <Card.Body className='RankingCardBody'>
                    <Card.Text className='RankingCardtext'>
                        <h3 className='RankingCardLeft' style={{display:"inline"}}>{NFT_name} #{NFT_number}</h3>
                        {show && <h6 className='RankingCardRight' style={{display:"inline", marginLeft:"10px"}}><Badge className='RankingCardBadge' bg="warning" text="dark" width="30px">ON SALE</Badge></h6>}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

function Explore() {
    const [nfts, setNfts] = useState(null);
    const [RankItem, setRandomNfts] = useState(null);

    const allnfts = async () => {
        const _nfts = await TotalNFT();
        setNfts(_nfts);
    };

    
    useEffect(() =>{
        console.log(1);
        const startnfts = async () => {
            const _nfts = await TotalNFT();
            setNfts(_nfts);
        };
        startnfts();
    },[]);

    useEffect(()=>{
        async function RandomNft(){
            var RecommandItem = [];
            var base = await TotalNFT();
            for (var i = 0; i<5; i++){
                const random_num = Math.floor(Math.random() * base.length);
                RecommandItem.push(base[random_num]);
            };
            setRandomNfts(RecommandItem);
        };
        RandomNft();
    },[]);

    function onSale(){
        let copy = [... nfts];
        console.log(copy);
        for (var i = 0; i<copy.length; i++){
            if(copy[i].price==0){
                copy.splice(i,1);
                i--;
            }
        };
        setNfts(copy);
    };

    console.log(RankItem);
    if(!nfts || !RankItem) {
        return (
            <>
            <div className='exploreSpinnerBack'>
               <Spinner animation="border" variant="success"/>
            </div>
            </>
        );

    }else{
         return (
         <>
        <div className='exploreBack'>
            <div className='rankingBack'>
                <div className='rankingTxt' style={{textAlign:"left",fontWeight:"bold"}}>
                    RECOMMENDATION
                </div>

                <div className='rankingList'>
                    {RankItem.map(item=>(
                    <Link to={`/Buy/${item.id}`} style={{textDecoration: 'none', color:'black'}} state={{jsonAddress : item.uri, Cost : item.price, Nid : item.id}}>
                        <Ranking NFT_name={item.name} NFT_url={item.image} NFT_price={item.price} NFT_number={item.id}/>
                    </Link>
                    ))}
                </div>
            </div>
            <div className='marketBack'>
                <div className='marketTxt' style={{textAlign:"left",fontWeight:"bold"}}>
                    MARKET
                </div>
                <div className="sortBack">
                    <DropdownButton id="marketSort" variant='light' size='larger' title="Filter By" textAlign="right">
                        <Dropdown.Item as="button" onClick={allnfts}>All NFT</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={onSale}>On Sale</Dropdown.Item>
                    </DropdownButton> 
                </div>
                <div className='marketList'>
                    {/* 준비용 */}
                    {nfts.map((nft, index) => (
                        <>
                        <Link className='nftLink' to={`/Buy/${nfts[index].id}`} style={{textDecoration: 'none', color:'black'}} state={{jsonAddress : nfts[index].uri, Nid : nfts[index].id, Cost : nfts[index].price}}>
                            <NFTList NFT_url={nfts[index].image} NFT_number={nfts[index].id} NFT_name={nfts[index].name} NFT_price={nfts[index].price}/>
                        </Link>

                        </>
                    )
                    )}
                </div>
            </div>
        </div>
        
        </>
    );
    }; 
}

export default Explore;