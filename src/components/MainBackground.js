import Trees from '../../images/Polygon.png';
import React from 'react';

import '../style/app.scss'

export class MainBackground extends React.Component {

  render(){
      return(
      <div className="backgroundcolor">


                <img className="backgroundtrees" src= {Trees}/>

      </div>
)
  }

}

export default MainBackground;
