import { useState } from 'react';
import Operation from './components/operations';
export default function App(){
  const [isSet, setIsSet] = useState(false)
  if(!isSet){
  return(
           <div className="App">
            <ul className="App-header">
              <li  className={` flex h-[100vh] flex-col justify-center`}>
                <button onClick={()=> setIsSet(true)} className='w-fit h-fit border mx-auto bg-blues p-2 text-white font-bold' to="/operations">START PLAYING</button>
              </li>
            </ul>
          </div>
  )}else{
    return(
      <>
        <Operation/>
      </>
    )
  }
}