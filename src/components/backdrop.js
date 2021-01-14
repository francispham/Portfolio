import React from 'react';
import '../css/backdrop.css';

const backdrop = props => (
  <div className="backdrop" role='button' aria-label='click' type='button' tabIndex={0} onKeyDown={() => {}} onClick={props.click}/>
);

export default backdrop;
