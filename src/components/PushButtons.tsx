import React from 'react';
import {GotValue} from "../../types";
import PushButton from "./PushButton";

interface Props {
  values: GotValue[];
}

const PushButtons: React.FC<Props> = ({values}) => {
  return (
    <div className='d-flex flex-wrap'>
      {values.map((item) => (
        <PushButton value={item}/>
      ))}
    </div>
  );
};

export default PushButtons;