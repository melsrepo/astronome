import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col, Form} from 'react-bootstrap';
import "../Style.css";

function Quiz () {
  const [monthState, setMonth] = useState("");
  const [dayState, setDay] = useState('default');
  const [signState, setSign] = useState("not");

  useEffect(() => {
    if((monthState == 'mar' && dayState > 20) || (monthState == 'apr' && dayState <= 19))
  {
    setSign("Aries");
  }
  else if((monthState == 'apr' && dayState > 19)|| (monthState == 'may' && dayState <= 20))
  {
    setSign("Taurus");
   
  }
  else if((monthState == 'may' && dayState > 20)|| (monthState == 'jun' && dayState <= 20))
  {
    setSign("Gemini");
    
  }
  else if((monthState == 'jun' && dayState > 20)|| (monthState == 'jul' && dayState <= 22))
  {
    setSign("Cancer");
  }
  else if((monthState == 'jul' && dayState > 22)|| (monthState == 'aug' && dayState <= 22))
  {
    setSign("Leo");
  }
  else if((monthState == 'aug' && dayState > 22)|| (monthState == 'sep' && dayState <= 22))
  {
    setSign("Virgo");
  }
  else if((monthState == 'sep' && dayState > 22)|| (monthState == 'oct' && dayState <= 22))
  {
    setSign("Libra");
  }
  else if((monthState == 'oct' && dayState > 22)|| (monthState == 'nov' && dayState <= 21))
  {
    setSign("Scorpio");
  }
  else if((monthState == 'nov' && dayState > 21)|| (monthState == 'dec' && dayState <= 21))
  {
    setSign("Sagitarius");
  }
  else if((monthState == 'dec' && dayState > 21) || (monthState == 'jan' && dayState <= 19))
    {
      setSign("Capricorn");
    }
  else if((monthState == 'jan' && dayState > 19)|| (monthState == 'feb' && dayState <= 18))
  {
    setSign("Aquarius");
  }
  else if((monthState == 'feb' && dayState > 18)|| (monthState == 'mar' && dayState <= 20))
  {
   setSign("Pisces");
  }  
    else
    {setSign("");
      } 
  });

let navigate = useNavigate();

return (
    <div>
    <label for="quiz" style={{ textAlign: 'center', display: 'block',}}>Please select your birthday</label>
  <div style={{ display: 'flex', justifyContent: 'center',  }}>
   <Form.Select size = "lg" name="month" className="modSelect" id="monthSlct" onChange = {(e) => 
  {const selectedMonth = e.target.value;
   setMonth(selectedMonth);}}>  

  <option value="defaultMonth">Birth month</option>
  <option value="jan">January</option>
  <option value="feb">February</option>
  <option value="mar">March</option>
  <option value="apr">April</option>
  <option value="may">May</option>
  <option value="jun">June</option>
  <option value="jul">July</option>
  <option value="aug">August</option>
  <option value="sep">September</option>
  <option value="oct">October</option>
  <option value="nov">November</option>
  <option value="dec">December</option>
</Form.Select> 

<Form.Select size = "lg" name="day" className = "modSelect" id="daySlct" onChange = {(e) => 
  {const selectedDay = e.target.value;
   setDay(selectedDay);}}>
      <option value="defaultDay">Birth day</option>
     {Array.from({length: 31 }, (_, i) => i + 1).map(day => <option key={day} value={day}>{day}</option>)}
</Form.Select> 
  </div>
       
  <button id="quizBtn"
  type="button"
  onClick= {() => {
    navigate(
      "/result",               
      { state: { signState } }, 
    );
  }}
>
  What's my sign?
</button> 
    </div>
  );
}
export default Quiz; 
