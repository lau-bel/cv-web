import React from 'react';
import '../style/app.scss';
import Linkedin from "../../images/linkedin.png";
import Instagram from "../../images/instagram.png";
import Github from "../../images/github-logo.png";




export class Contactbox extends React.Component {
    render(){
      return(
        <div>
        <div className="contactbox">
           <h1> CONTACT </h1>

           <p> Laura Belferroum <br/>
           <br/>
                Liège, Belgium  <br/>
                <br/>
                l.belferroum@gmail.com
           </p>
               <div className="clickable">
                  <a href= "https://www.linkedin.com/in/laura-belferroum-4a108a147/" target="_blank"><img src={Linkedin} /></a>
                  <a href = "https://github.com/lau-bel" target="_blank"><img src={Github} /></a>
                  <a href = "https://www.instagram.com/utilisatrice42/" target="_blank"><img src={Instagram}  /></a>
               </div>

        </div>
        </div>

      )
    }
}

export default Contactbox;
