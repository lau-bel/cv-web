import React from 'react';
import image from '../../../images/photocv.jpg';
import '../../style/app.scss'


export class Picture extends React.Component {
    render(){
      return(
        <div className="photocv">
            <img src={image} alt="photo cv"/>
        </div>
      )
    }
}

export default Picture;
