import React from 'react';
import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import "../Style.css";

function Home () {
let navigate = useNavigate();
  return (
    <div>
        <h3 id = "welcomeMsgHead" >Welcome to AstronoMe,</h3> 
       <p id = "welcomeMsg">where we connect YOU with the stars.
        <br></br>Please use this application to learn your astrological sign!
        </p>

    
    <Row> <Col md = {3}> </Col> <Col xs = {12} > <button id = "homeBtn" onClick = {() => {navigate("/quiz");}} >What's my sign?</button></Col></Row>
    </div>
  );
}
export default Home; 