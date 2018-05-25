import React from 'react';

const CssProperities = (props) => {
  return (
    <ul className="css-prop">
      <li>Default Value: { props.defaultValue }</li>
      <li>Animatable: { props.animatable }</li>
    </ul>
  )
}

export default CssProperities;
