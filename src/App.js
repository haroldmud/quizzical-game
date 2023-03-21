import { useState } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Operation from './components/operations';
export default function App(){
  const [is, setIs] = useState(true)
  return(
    <>
      <Operation/>
    </>

    // <Router>
    //        <div className="App">
    //         <ul className="App-header">
    //           <li  className={`${is ? "" : "hidden"} flex h-[100vh] flex-col justify-center`}>
    //             <Link onClick={()=> setIs(prev => !prev)} className='w-fit h-fit border mx-auto bg-blues p-2 text-white font-bold' to="/operations">START PLAYING</Link>
    //           </li>
    //         </ul>
    //        <Routes>
    //              <Route exact path='/operations' element={< Operation />}></Route>
    //       </Routes>
    //       </div>
    // </Router>
  )
}