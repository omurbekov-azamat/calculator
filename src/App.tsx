import React from 'react';
import PushButtons from "./components/PushButtons";
import {VALUES} from "./constants";

function App() {


  return (
    <div className='container'>
      <div className='mt-5' style={{width: '400px', marginLeft: '300px'}}>
        <div
          className='border border-dark pt-1'
          style={{height: '50px', background: 'red'}}
        >
        </div>
    <PushButtons values={VALUES}/>
      </div>
    </div>
  );
}

export default App;
