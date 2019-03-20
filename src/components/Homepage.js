import React from 'react';
import SvgGroup from './images/Group.js';
import CvHome from './CvHome.js';
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
        <div style={{display: this.state.showcv? "block" : "none"}}>
        <CvHome />
        </div>
        </div>
      );
    }
  }

export default Homepage;
