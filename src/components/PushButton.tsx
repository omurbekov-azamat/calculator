import React from 'react';
import {GotValue} from "../../types";

interface Props {
  value: GotValue;
}

const PushButton: React.FC<Props> = ({value}) => {
  return (
    <div
      className='border border-light text-center fs-2 pt-4'
      style={{width: '100px', height: '100px'}}
    >
      {value.value}
    </div>
  );
};

export default PushButton;