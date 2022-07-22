import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result"
import "./Style.css";

function Astronome()
{
     return (
          <Router>
               <div id = "topHead"><h1>AstronoMe</h1> 
               <h2 id = "header2Top">connecting you with the stars</h2>
               </div>
               <Routes> 
                    <Route path = "/" element = {<Home />}/> 
                    <Route path = "/quiz" element = {<Quiz />}/> 
                    <Route path = "/result" element = {<Result />}/>
               </Routes>
          </Router>
     );
}

export default Astronome;
