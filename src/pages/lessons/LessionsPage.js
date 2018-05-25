import React from 'react';

import {
  Nav
} from '../../components'

const LessionsPage = () => {
  return (
    <div className="container flex" id="lessions">
      <Nav page={ 'lessions' } />
      <div className="content flex f-4">
        <div>
          <h2 className="title">lessions</h2>
        </div>
      </div>
    </div>
  )
}

export default LessionsPage;
