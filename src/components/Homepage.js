import React from 'react';
import SvgGroup from './images/Group.js';
import CvHome from './CvHome.js';

import wordcloud from '../../images/wordcloud.png';
import timeline from '../../images/timeline.png';
import image from '../../images/photocv.jpg';
import qrcode from '../../images/My_PDF.png';

import Linkedin from "../../images/linkedin.png";
import Instagram from "../../images/instagram.png";
import Github from "../../images/github-logo.png";

import '../style/app.scss'


export class Homepage extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      showcv : false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState({showcv: !this.state.showcv});
    }

    render(){

      return(
        <div>
        <div className="homepage">
     <div style={{display: this.state.showcv? "none" : "block"}}>

     <div class="stars"></div>
     <div class="twinkling"></div>

     <SvgGroup className="fox" onClick={this.handleClick}/>


     <div className ="mainElement">
            <div className="quote">
                - “ The cure for boredom is curiosity. <br/>There is no cure for curiosity” -
                <span className="author"> Dorothy Parker</span>
      </div>
                <div className="clickbait"> So click the fox! </div>
            </div>
        </div>
        </div>

        <div style={{display: this.state.showcv? "block" : "none"}}>
        <CvHome />
        </div>


        <div className = "mobileversion">

                    <div className="photocvmob">
                        <img src={image} alt="photo cv"/>
                    </div>

                    <div className = "biotextmob" >

                          <p>
                          After getting my Master's degree in History at Liège University and working in different areas,
                          I was looking for a new challenge.
                          I’m adaptive and curious so I decided to learn web development,
                          and the front end side of it quickly became a new passion for me.
                          It allows me to develop my creativity and keep on learning new things every day.
                          Now, I’m looking forward to working in a challenging and dynamic environment.
                          </p>

                    </div>

                    <div className="contactboxmob">
                       <h1> CONTACT </h1>
                       <div className = "qrcode">
                       <img src = {qrcode} alt = "qrcodedl" width="100"/>
                       </div>
                       <br/>
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

                    <div className="skillbox">

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

                    <div className="educationbox" >

                     <h1> EDUCATION </h1>

                       <div className = "texteduc">


                       <p className = "becode"> 2018 - 2019 | Becode.org <br/>
                         Intensive coding bootcamp
                       </p>
                       <br/>
                       <p className = "master2"> 2016-2017 | ULiège<br/>
                           Master’ s degree of history highschool teacher
                        </p>
                        <br/>
                       <p className = "master1"> 2013-2016 | ULiège<br/>
                           Master’s degree in Modern history, <br/>
                           especially the contemporary history and women history.
                       </p>
                       <br/>
                       <p className = "bac"> 2009-2013 | ULiège<br/>
                           Bachelor’s degree in History, especially Modern history.
                           </p>
                      </div>

                    </div>

                    <div className="experiencebox" >

                     <h1> WORK EXPERIENCES </h1>
                      <br/>
                       <p > 23 april - 29 juni 2018 | Athénée Léonie de Waha (Liège) <br/>
                       Highschool history teacher
                        </p>
                        <br/>

                       <p > 22 february - 29 march 2018 | Institut Communal Marius Renard (Anderlecht)<br/>
                       Highschool teacher in History, Philosophy & social studies.
                       </p>
                       <br/>
                       <p > 2015-2018 | Maison massin Bakery <br/>
                           Sales Woman <br/>
                           First as a student, then as a temporary worker.
                       </p>
                       <br/>
                       <p > 2007-2017 | Student jobs <br/>
                           Several jobs such as saleswoman, museum guide, guarding.
                           </p>


                    </div>

                    <div className="voluntbox" >

                     <h1> VOLUNTEERING </h1>
                      <br/>

                      <p > 2016 - 2018 | Collectif "Et ta soeur!"<br/>
                      Activist in a young women empowerment group.
                      </p>
<br/>
                       <p > 2017 | Vie Féminine <br/>
                       Volunteer as a french teacher for immigrant’s women
                        </p>
<br/>
                       <p > 2015-2016 | Fédé <br/>
                           Elected student representative <br/>
                       </p>


                    </div>

                    <div className="interestbox" >

                     <h1> INTERESTS </h1>
                      <br/>
                       <p > Tae Bo
                        </p>

                       <p >Wool lover
                     </p>
                       <p > Blogging <br/>

                           </p>


                    </div>
                    <div className="softbox" >

                     <h1> SOFT SKILLS </h1>
                      <br/>

                      <img  src = {wordcloud} alt="wordscloud" />

                    </div>

                    </div>



        </div>



      );
    }
  }

export default Homepage;
