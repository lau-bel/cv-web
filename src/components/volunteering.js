import React from 'react';
import '../style/app.scss';

function Volunteering (props){

      return(

        <div style={{display: props.volunteering? "block" : "none"}}>


           <div className="experiencesbox" >

            <h1> VOLUNTEERING </h1>
             <br/>

             <p > 2016 - 2018 | Collectif "Et ta soeur!"<br/>
             Activist in a young women empowerment group.
             </p>

              <p > 2017 | Vie Féminine <br/>
              Volunteer as a french teacher for immigrant’s women
               </p>

              <p > 2015-2016 | Fédé <br/>
                  Elected student representative <br/>
              </p>


           </div>


          </div>


      )

}

export default Volunteering;
