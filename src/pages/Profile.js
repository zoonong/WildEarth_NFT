import React, { Component } from 'react';
import './/pagecss/Profile.css';
import { useState } from 'react';
import { Carousel, Dropdown, DropdownButton, Card, Button } from 'react-bootstrap';

var profile_name = 'DEFAULT_NAME'
var profile_no = '0000'
var wallet_address = '0x00000000'

let img_src = ["\\img\\bear.png", "\\img\\owl.png"]

function Profile() {
    return (
        <>
        <div className='profileBack'>
            <div className='profileLeft'>
                <div className='proflieName'>
                    {profile_name}
                </div>
                <div className='profileNo'>
                    #{profile_no}
                </div>
                <div className='wallet'>
                    WALLET
                </div>
                <div className='walletAddress'>
                    {wallet_address}
                </div>
            </div>
            <div className='profileRight'>
                <div className='tapLine'>
                    Collected
                </div>
                <div className='Animal_frame_bottom'>
                    <div class="row0">


                    <div className="col-10 col-md-2 col-sm-5">
                        <Card>
                            <Card.Img variant="bottom" src={img_src[1]} />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-10 col-md-2 col-sm-5">
                        <Card>
                            <Card.Img variant="bottom" src={img_src[1]} />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-10 col-md-2 col-sm-5">
                        <Card>
                            <Card.Img variant="bottom" src={img_src[1]} />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-10 col-md-2 col-sm-5">
                        <Card>
                            <Card.Img variant="bottom" src={img_src[1]} />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-10 col-md-2 col-sm-5">
                        <Card>
                            <Card.Img variant="bottom" src={img_src[1]} />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="offset-md-2"></div>

                    </div>
                    <div class="row-10">

                    <div className="col-10 col-md-2 col-sm-5">
                        <Card>
                            <Card.Img variant="bottom" src={img_src[1]} />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-10 col-md-2 col-sm-5">
                        <Card>
                            <Card.Img variant="bottom" src={img_src[1]} />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-10 col-md-2 col-sm-5">
                        <Card>
                            <Card.Img variant="bottom" src={img_src[1]} />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-10 col-md-2 col-sm-5">
                        <Card>
                            <Card.Img variant="bottom" src={img_src[1]} />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-10 col-md-2 col-sm-5">
                        <Card>
                            <Card.Img variant="bottom" src={img_src[1]} />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="offset-md-2"></div>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Profile;