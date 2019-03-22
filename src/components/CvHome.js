import React from 'react';
import Picture from './images/picture.js';
import Contactbox from './contactbox.js';
import Skills from './skills.js';
import Education from './education.js';
import Experiences from './experiences.js';
import Volunteering from './volunteering.js';
import Interests from './interests.js';
import Softskills from './softskills.js';



import wordcloud from '../../images/wordcloud.png';
import timeline from '../../images/timeline.png';

//import MainBackground from './MainBackground.js';
import Bio from './bio.js';
// import Roulette from './roulette.js';

import '../style/app.scss'

export class CvHome extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      skills : false,
      softskills :false,
      volunteering :false,
      interests :false,
      education :false,
      experiences:false,
      bio: true,
      activeTab: "bio",
    }
    this.OpenInfo = this.OpenInfo.bind(this);
  }

    OpenInfo(info) {
        this.setState((state) => ({
          [info] : true,
          [state.activeTab] :false,
          activeTab : info



        }));
      }


  render(){
      return(

            <div className="cvhome" >
            <div className="cvhome1" >


            <div className="leftbox" >

            <Picture />

            <Bio bio={this.state.bio} />


            <Skills skills={this.state.skills}/>

            <Education education={this.state.education} />

            <Experiences experiences={this.state.experiences}/>

            <Volunteering volunteering={this.state.volunteering}/>

            <Interests interests={this.state.interests}/>

            <Softskills softskills={this.state.softskills}/>
            </div>


            <div className ="rightbox">




                <div className ="subtitles">
                      <p id="skills" onClick={() => this.OpenInfo("skills")}> SKILLS </p>
                      <p id="education" onClick={() => this.OpenInfo("education")}> EDUCATION </p>
                      <p id="softskills" onClick={() => this.OpenInfo("softskills")}> SOFT SKILLS </p>


                      <div id="triangle">
                      </div>
                      <p id="experiences" onClick={() => this.OpenInfo("experiences")}> EXPERIENCES </p>
                      <p id="volunteering" onClick={() => this.OpenInfo("volunteering")}> VOLUNTEERING </p>
                      <p id="interests" onClick={() => this.OpenInfo("interests")}> INTERESTS </p>

                </div>
                <Contactbox/>


                </div>



</div>

            </div>


)
  }

}

export default CvHome;
