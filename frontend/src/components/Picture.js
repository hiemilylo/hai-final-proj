import React, { Component } from 'react';
import '../stylesheets/Picture.css';
import BackArrow from './BackArrow';
import ForwardArrow from './ForwardArrow';
import Webcam from "react-webcam";

// import Tour from 'reactour';

class Picture extends Component {
  // state = {isTourOpen: false}
  state = {
    screenshot: null,
    ethnicity: null,
    age: null
  };

  // closeTour = () => {
  //   console.log('finished tour');
  // }

  // steps = [
  //   {
  //     selector: '.Title',
  //     content: 'This title sucks!',
  //   },
  //   {
  //     selector: '.group',
  //     content: 'Bar is too long!'
  //   }
  // ];

  // startTour = () => {
  //   this.setState({isTourOpen: true});
  // }

  // closeTour = () => {
  //   this.setState({isTourOpen: false});
  // }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const screenshotVal = this.webcam.getScreenshot();
    this.setState({
      screenshot: screenshotVal
    })
    fetch('http://0.0.0.0:5000/ai', {
      method: "GET",
      mode: "no-cors",
      // body: JSON.stringify(results)
    }).then(response => response.json());
    // .then(json => this.setState(json));
  }

  render () {
    return (<>
      <BackArrow url='/gender' />
      <ForwardArrow url='/picture' />
      <div className='Container'>
        <div className="Title">
          Picture
        </div>
        <div className="Text">
          Add a picture to your profile!
        </div>
        <div className="webcam">
          { this.state.screenshot ?
          <img src={`${this.state.screenshot}`}/>
          :
          <Webcam
          screenshotFormat="image/jpeg"
            ref={this.setRef}
            height={360}
          />
          }
          <div className="capture">
            <button onClick={this.capture} disabled={this.state.screenshot}>Capture</button>
          </div>
        </div>
        {/* <button onClick={this.startTour}>Preview Tour</button> */}
      </div>
      {/* <Tour
        steps={this.steps}
        isOpen={this.state.isTourOpen}
        onRequestClose={this.closeTour}/> */}
      </>
    )
  }
}

export default Picture;