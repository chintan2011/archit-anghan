import './App.css';
import React, {Component} from "react";
import ProfileDetails from './components/ProfileDetails';
import ProfileInfo from './components/ProfileInfo';
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render(){
    return (
      <div className="app">
          <div className="app_left">
            <ProfileInfo/>
          </div>
          <div className="app_right">
            <ProfileDetails/>
          </div>
      </div>
    );
  }
  
}

export default App;
