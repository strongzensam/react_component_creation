import React from 'react';

const child2 = (props) => {
  return (
    <div>
      <button onClick={props.doWhateverElse}>{props.title}</button>
    </div>
  )
}
export default child2;
