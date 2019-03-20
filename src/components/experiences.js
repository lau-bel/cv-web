import React from 'react';
import '../style/app.scss';

function Experiences (props){

      return(

        <div style={{display: props.experiences? "block" : "none"}}>


           <div className="experiencesbox" >

            <h1> EXPERIENCES </h1>
             <br/>
              <p > 23 april - 29 juni 2018 | Athénée Léonie de Waha (Liège) <br/>
              Highschool history teacher
               </p>
               
              <p > 22 february - 29 march 2018 | Institut Communal Marius Renard (Anderlecht)<br/>
              Highschool teacher in History, Philosophy & social studies.
              </p>
              <p > 2015-2018 | Maison massin Bakery <br/>
                  Sales Woman <br/>
                  First as a student, then as a temporary worker.
              </p>
              <p > 2007-2017 | Student jobs <br/>
                  Several jobs such as saleswoman, museum guide, guarding.
                  </p>


           </div>


          </div>


      )

}

export default Experiences;
