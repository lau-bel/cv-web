import React from 'react';
import '../style/app.scss';
import timeline from '../../images/timeline.png';





function Education (props){

      return(

        <div style={{display: props.education? "block" : "none"}}>


           <div className="skillsbox" >

            <h1> EDUCATION </h1>
              <img  src = {timeline} alt="image puces ul"/>
              <p className = "becode"> 2018 - 2019 | Becode.org <br/>
                Intensive coding bootcamp
              </p>
              <p className = "master2"> 2016-2017 | ULiège<br/>
                  Master’ s degree of history highschool teacher
               </p>
              <p className = "master1"> 2013-2016 | ULiège<br/>
                  Master’s degree in Modern history, <br/>
                  especially the contemporary history and women history.
              </p>
              <p className = "bac"> 2009-2013 | ULiège<br/>
                  Bachelor’s degree in History, especially Modern history.
                  </p>
              

           </div>


          </div>


      )

}

export default Education;
