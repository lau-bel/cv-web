import React from 'react';
import '../style/app.scss';

function Interests (props){

      return(

        <div style={{display: props.interests? "block" : "none"}}>


           <div className="experiencesbox" >

            <h1> INTERESTS </h1>
             <br/>
              <p > Tae Bo
               </p>

              <p >Wool lover
            </p>
              <p > blogging <br/>

                  </p>


           </div>


          </div>


      )

}

export default Interests;
