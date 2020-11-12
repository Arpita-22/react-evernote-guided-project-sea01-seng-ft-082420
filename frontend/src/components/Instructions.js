import React from 'react';
import { Wave } from 'react-animated-text';

const Instructions = () => {
  return <div className="instructions" style={{height:20}}>
    <Wave text="Select a note." effect="stretch" effectChange={2.0} />
    {/* Select a note. */}
    </div>;
}

export default Instructions;
