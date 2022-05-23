import { useState,useEffect} from 'react';
import React from 'react';
import { Carousel,Navbar,Container, Nav, NavDropdown, Card } from 'react-bootstrap';
import axios from 'axios';


function Login(){
    var [data, setData] = useState(null);
    useEffect(() =>{
        axios.get('https://metadata-store.klaytnapi.com/9a3233de-9aa6-694c-df21-50632eee371e/87781b89-8fee-7c8a-5f43-4b963ce35cf6.json').then((reponse) => {setData(reponse.data);});
    });
    var item = JSON.stringify(data);
    // const obj = JSON.parse(item);
    
    return (
      <>
      <br></br>  
      <br></br>  
      <br></br>  
      <br></br>  
      <br></br>  
      <br></br>  
        <div>
            {item}
            <br></br>
        </div>
      </>
    );
  }

export default Login;