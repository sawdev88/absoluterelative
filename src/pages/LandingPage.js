import React from 'react';

import {
  Nav
} from '../components'

const LandingPage = () => {
  return (
    <div className="container flex">
      <Nav index={ 1 }/>
      <div className="content flex f-4 f-center">
        <div>
          <h1>the <i className="block">absolute</i> relative</h1>
          <p>Another CSS Guide</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
