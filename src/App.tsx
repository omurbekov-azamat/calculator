import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "./app/store";
import {VALUES} from "./constants";
import PushButtons from "./components/PushButtons";

function App() {
  const currentValue = useSelector((state: RootState) => state.calculator);

  return (
    <div className='container'>
      <div className='mt-5' style={{width: '400px', marginLeft: '300px'}}>
        <div className='border border-dark pt-1' style={{height: '50px'}}>
          {currentValue.value}
        </div>
        <PushButtons values={VALUES}/>
      </div>
    </div>
  );
}

export default App;
