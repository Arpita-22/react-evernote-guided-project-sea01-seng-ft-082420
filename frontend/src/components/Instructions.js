import React from 'react';
import { Wave } from 'react-animated-text';

const Instructions = () => {
  return <p className="instructions">
    <Wave text="Select a note." effect="stretch" effectChange={2.0} />
    {/* Select a note. */}
    </p>;
}

export default Instructions;
