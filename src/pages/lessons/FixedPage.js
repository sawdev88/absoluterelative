import React, { Component } from 'react';

import {
  Nav,
  CssProperities
} from '../../components'

class FixedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0
    }
  }


  render() {
    return (
      <div className="container flex" id="lessions">
        <Nav page={ 'lessions' } index={ 1 } />
        <div className="content f-4 bg">
          <div className="callout inline bg-white padding-callout">
            <h3>Fixed</h3>
            <CssProperities
              defaultValue={ 'static' }
              animatable={ 'false ' } />
          </div>
        </div>
      </div>
    )
  }
}

export default FixedPage
