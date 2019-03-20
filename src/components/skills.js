import React from 'react';
import '../style/app.scss';





function Skills (props){

      return(

        <div style={{display: props.skills? "block" : "none"}}>


           <div className="skillsbox"   >

            <h1> TECHNICAL SKILLS </h1>

              <ul className ="border"> <li> HTML5 </li>
                    <li> CSS3 </li>
                    <li> JavaScript </li>
                    <li> Sass </li>
                    <li> React.js </li>
                    <li> Vue.js </li>
                  </ul>

                  <ul className ="border">
                        <li> Figma </li>
                        <li> Github </li>
                        <br/>
                        <br/>
                        <li> Scrum Method </li>
                        <li> Trello </li>

                  </ul>

                  <ul>
                        <li> Final cut pro </li>
                        <li> File maker pro </li>

                  </ul>

                  <h1> LANGUAGES </h1>
                  <ul>
                        <li> English: B2 </li>
                        <li> Dutch : A1 </li>
                        <li> French : native speaker </li>
                  </ul>


           </div>


          </div>


      )

}

export default Skills;
