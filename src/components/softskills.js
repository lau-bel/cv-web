import React from 'react';
import '../style/app.scss';
import wordcloud from '../../images/wordcloud.png';

function Softskills (props){

      return(

        <div style={{display: props.softskills? "block" : "none"}}>


           <div className="experiencesbox" >

            <h1> SOFT SKILLS </h1>
             <br/>

             <img  src = {wordcloud} alt="wordscloud"/>

           </div>


          </div>


      )

}

export default Softskills;
