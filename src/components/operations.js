import { useEffect, useState } from "react";
import Question from "./Questions";

import {IoCloseCircle, IoCheckmarkCircle} from 'react-icons/io5'

export default function Operation() {
  const [quizz, setQuizz] = useState([])
  const [click, setClick] = useState(true)
  const [check, setCheck]=useState(false);
  // const [answer, setAnswer] = useState([])
  const [counter, setCounter] = useState(0);
  
  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=10")
      .then(res => res.json())
      .then(data => setQuizz(data.results))
      .catch(err => console.log(err))
  }, [])

  // function shuffleArray(array) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // }

  // function checkCorrect(){
  //   for(let i=0;i<quizz.length;i++){
  //     if(quizz[i].correct_answer === quizz[i].){
  //       setCheck(true)
  //     }else{
  //       setCheck(false)
  //     }
  //   }
  // };

  return (
    <section className="flex justify-center pt-20">
      <div className="w-6/12">
        <div>
          {
            quizz.map((item, idx) =>
            <div key={idx}>
            <p className="text-blues font-bold tex-xl">
              {item.question}
            </p>
                <div className="flex gap-4 mt-4">
                <Question setCounter={setCounter}  isShow={check} correct_ans={item.correct_answer} allAns={[item.correct_answer, ...item.incorrect_answers]} setCheck={setCheck}/>
          
            </div> 
          </div>
            )
          }
          <div className="flex justify-between">
            <p>{JSON.stringify(quizz, null, 2)}</p>
            {/* <div className="flex gap-4 mt-4">
              {assertOne.map((item,idx)=>
                  <button key={idx}
                  className={`"bg-blue-200" : ""}  text-blues border border-blues px-2 rounded-md text-sm font-semibold `}>{item.name}</button>
                )}
            </div> */}
            {/* { questionOne === 0 ? <button className="text-red-500 text-2xl"><IoCloseCircle/></button> : questionOne === 1 ? <button className="text-green-500 text-2xl"><IoCheckmarkCircle/></button> : ""}   */}
          </div>
        </div>
        <div>
          {counter}/10
        </div>
        <div className="mt-8">
          <div className="mt-20 flex justify-center pb-20">
            {<div>
              <button onClick={()=> {setClick(false); setCheck(true) }} className={`${click ? '': 'hidden'}bg-blues p-4 text-white font-bold rounded-lg shadow-2xl`}>Result</button>
              <button onClick={()=> window.location.reload()} className={`${click?'hidden':''} bg-blues p-4 text-white font-bold rounded-lg shadow-2xl`}>Next challenge</button>
            </div> }
          </div>
        </div>
      </div>
    </section>
  )
} 
