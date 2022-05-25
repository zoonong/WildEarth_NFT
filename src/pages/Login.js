import { useState,useEffect} from 'react';
import React from 'react';
import { Carousel,Navbar,Container, Nav, NavDropdown, Card } from 'react-bootstrap';
import axios from 'axios';


function Login(){
    var [data, setData] = useState(["fucky"]);
    const url = "https://metadata-store.klaytnapi.com/9a3233de-9aa6-694c-df21-50632eee371e/f8dc0fb7-4d95-1884-5350-e783905517d2.json";

    useEffect(()=>{
      axios.get(url).then(function(response) {
        setData(response.data);
    });
    },[]);

    
    var item = JSON.stringify(data);
    
    
    var arr = Object.values(data)
    var info = arr[0][1].value
    console.log(arr)
    console.log(info)
    
    // function test(){
    //   var AttHat = data.attributes[2].value;
    //   console.log(AttHat);
    // }
    // var AttHat = data.attributes[2].value
    // var AttNecklace = data.attributes[3].value
    // var AttBg = data.attributes[0].value
    // console.log(data);
    return (
      <>
      <br></br>  
      <br></br>  
      <br></br>  
      <br></br>  
      <br></br>  
        <div>
          <div style = {{width:"256px", height:"256px" }}>
            <Card>
              <Card.Img variant="bottom" src={data.image} />
                  <Card.Body>
                    <Card.Text style={{fontWeight:"bold"}}>
                          {/* <button onClick={test}>test</button> */}
                          {/* {AttNecklace}<br/>
                          {AttBg}<br/> */}
                          {info},{data.edition}
                      </Card.Text>
                  </Card.Body>
            </Card>
          </div>
            <li>
              
              <br/>
              <br/>
              {arr[0][1].value}<br/>
              {arr[0][2].value}<br/>
              {arr[0][3].value}<br/>
            </li>
        </div>
      </>
    );
  }

export default Login;