import React from 'react';
import {useDispatch} from "react-redux";
import {getTotal, getClear} from "./PushSlice";
import PushButton from "./PushButton";
import {GotValue} from "../../types";

interface Props {
  values: GotValue[];
}

const PushButtons: React.FC<Props> = ({values}) => {
  const dispatch = useDispatch();

  return (
    <div className='d-flex flex-wrap'>
      {values.map((item) => (
        <PushButton
          key={Math.random() * 999}
          value={item}
        />
      ))}
      <div
        className='border border-light text-center fs-2 pt-4'
        style={{width: '100px', height: '100px'}}
        onClick={() => dispatch(getTotal())}
      >
        =
      </div>
      <button className='btn btn-danger' onClick={() => dispatch(getClear())}>clear</button>
    </div>
  );
};

export default PushButtons;