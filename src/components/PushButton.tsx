import React from 'react';
import {useDispatch} from "react-redux";
import {getValue} from "./PushSlice";
import {GotValue} from "../../types";

interface Props {
  value: GotValue;
}

const PushButton: React.FC<Props> = ({value}) => {
  const dispatch = useDispatch();
  return (
    <div
      className='border border-light text-center fs-2 pt-4'
      style={{width: '100px', height: '100px'}}
      onClick={() => dispatch(getValue(value.value))}
    >
      {value.value}
    </div>
  );
};

export default PushButton;