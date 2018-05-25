import React from 'react';
import { Link } from 'react-router-dom';

function landingNav() {
  return (
    <nav id="nav" className="flex f-1">
      <ul className="blue-hover">
        <li><Link to='/lessions'>Lessions</Link></li>
        <li><Link to='/guides'>Guides</Link></li>
      </ul>
    </nav>
  )
}

function lessionsNav(props) {
  return (
    <nav id="nav" className="flex f-1">
      <Link className="home-link" to='/'><i className="fas fa-arrow-left"></i></Link>
      <ul className="orange-hover">
        <li>Postioning</li>
          <ul>
            <li className={ props.index === 1 ? 'selected' : null }>
              <Link to='/lessions/fixed'>Fixed</Link>
            </li>
            <li><Link to='/relative'>Relative</Link></li>
            <li><Link to='/absolute'>Absolute</Link></li>
          </ul>
      </ul>
    </nav>
  )
}

const Nav = (props) => {
  if (props.page === 'lessions') {
    return lessionsNav(props);
  } else {
    return landingNav();
  }
}

export default Nav;
