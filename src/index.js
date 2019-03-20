import React from "react";
import ReactDOM from "react-dom";
import Homepage from './components/Homepage.js'
import './style/app.scss'

class HelloMessage extends React.Component {
    render() {
        return <div>
          <Homepage />
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render (

  <HelloMessage />, App

);
