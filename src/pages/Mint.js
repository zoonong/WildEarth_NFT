import React, { Component } from 'react';
import './/pagecss/Mint.css';
import { useState } from 'react';
import { Form,DropdownButton, Card, Button } from 'react-bootstrap';

export default function Mint() {

    let img_src = ["\\img\\bear.png", "\\img\\owl.png"]
    let btn_st = {background:"#E0FACC", fontWeight: "bold"}

    return (
        <>
        <br></br>
         <div className='Mint_frame_top'>
            <div className='Mint_img_card'>
                <Card>
                    <Card.Img variant="bottom" src={img_src[1]}/>
                        <Card.Body>
                            <Card.Text style={{fontWeight:"bold"}}>
                                New NFT
                            </Card.Text>
                        </Card.Body>
                </Card>
            </div>

            <div className='Mint_form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>NFT address</Form.Label>
                    <Form.Control placeholder="NFT_URL" />
                    <Form.Text className="text-muted">
                        Minting할 NFT URL 입력
                    </Form.Text>
                </Form.Group>

                <div className='Mint_btn'>
                    <Button variant="light" style={btn_st} >
                        Mint
                    </Button>
                </div>
            </div>
        </div>
        
        </>
    );
}