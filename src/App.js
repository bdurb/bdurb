import React, { Component } from 'react';
import './App.css';
import brian from './assets/brian.jpg';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <div className='container'>
          <img className='main-image' src={brian} alt='me' />
          <h1>Hey, I'm Brian</h1>
            <div>
              <h3>And I am a Software Engineer</h3>
            </div>
            <div className='icons'>
              <a href='https://github.com/bdurb'>
                <i class="fab fa-github"></i>
              </a>
              <a href='https://www.linkedin.com/in/brian-durbin/'>
                <i class="fab fa-linkedin"></i>
              </a>
              <a href='mailto: brian@bdurb.com'>
                <i class="fas fa-envelope"></i>
              </a>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
