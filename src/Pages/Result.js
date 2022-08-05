import React from 'react';
import { useLocation } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import {Container,Row,Col, Form} from 'react-bootstrap';

function Cardinal ()
{
  return (
  <p>Your mode is <b>Cardinal</b>.<br></br>
  Traits that may describe you are <b>strong leader</b> and <b>self-starter</b>. 
  <br></br>Focus on <b>completing tasks</b></p>);
}
function Fixed ()
{
  return (
  <p>Your mode is <b>Fixed</b>.
  <br></br>Traits that may describe you are <b>hard-working</b> and <b>reliable</b>. 
  <br></br>Focus on <b>being flexible</b></p>
  );
}
function Mutable () {
  return (
  <p>Your mode is <b>Mutable</b>. 
  <br></br>Traits that may describe you are <b>flexible</b> and <b>adaptable</b>. 
  <br></br>Focus on <b>standing by conviction</b></p>
  );
} 

function Err () {
  let navigate = useNavigate(); 
  return (
  <div>
  <p>Please make sure to select a birth month and birth day</p>
  <Row> <Col md = {3}> </Col> <Col md = {9}>
    <button id = "resultBtn"
  type="button"
  onClick= {() => {
    navigate(
      "/quiz" 
    );
  }}
>
  What's my sign?
</button> </Col> </Row>
  </div>);
}

  function Result() {
    const { state } = useLocation(); 
    let signMode = '';
    let traitMsg = '';

    const calcMode = (s) => {
    if (s.signState == 'Aries' || s.signState == 'Cancer' || s.signState == 'Libra' || s.signState == 'Capricorn' ) {
    signMode = 'Cardinal'; 
    traitMsg = <Cardinal/>
    
    }
    else if (s.signState == 'Taurus'|| s.signState == 'Leo'|| s.signState == 'Scorpio' || s.signState == 'Aquarius') {
      signMode = 'Fixed';
      traitMsg = <Fixed/>
    
      }
      else if (s.signState == 'Gemini'|| s.signState == 'Virgo'|| s.signState == 'Sagitarius' || s.signState == 'Pisces')  {
      signMode = 'Mutable';
      traitMsg = <Mutable/>
      
      }
      else if (s.signState == ''){
          signMode = '';
          traitMsg = <Err/>;
      }
    }  

    return (
      
      <div>
          {calcMode(state)}
          
        <h2>Your result is </h2> 
        <div>
          <p><b>{state.signState}</b></p>
          {traitMsg}
        </div>
      </div>
    );
  }
export default Result; 