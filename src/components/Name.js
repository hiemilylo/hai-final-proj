import React from 'react';
import '../stylesheets/Name.css';
import BackArrow from './BackArrow';
import ForwardArrow from './ForwardArrow';

function Name() {
  return (
    <>
      <BackArrow />
      <ForwardArrow url='/name' />
      <div className='Container'>
        <div className="Title">
          Name
        </div>
        <div class="group">      
          <input type="text" required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>What's your name?</label>
        </div>
        {/* <div className="Text">
          This is Application Irritation, an AI (geddit?) that helps you fill out online forms. Except, this AI does not follow the best design principles. It is a demonstration of what <span className="not">NOT</span> to do while designing your AI-powered software. Your task is to sign up for a new account on our service against the wishes of AI!
        </div>
        <div className="Footer">
          Designed with ❤️ by Emily Lo and Sayan Chaudhry.
        </div> */}
      </div>
    </>
  );
}

export default Name;