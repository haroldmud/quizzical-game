import { useEffect, useState } from "react";
import Question from "./Questions";

export default function Operation() {
  const [quizz, setQuizz] = useState([])
  const [click, setClick] = useState(true)
  const [check, setCheck]=useState(false);
  const [answer, setAnswer] = useState([]);
  const [counter, setCounter] = useState('F');
  
  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=10")
      .then(res => res.json())
      .then(data => setQuizz(data.results))
      .catch(err => console.log(err))
  }, [])

  const success = ['A+','A','B+','B','C+']
  const randomly = ['C+','C','D','F'];
  function handleRandom(){

    answer.length === 0 || success.length !==0 ? setCounter('F') :setCounter(randomly[Math.floor(Math.random() * randomly.length-1)])
  }

  return (
    <section className="flex justify-center pt-20">
      <div className="w-6/12 relative">
        <div>
          {
            quizz.map((item, idx) =>
            <div key={idx}>
            <p className="text-blues font-bold tex-xl">
              {item.question}
            </p>
                <div className="flex gap-4 mt-4">
                <Question answer={answer} setAnswer={setAnswer} setCounter={setCounter}  isShow={check} correct_ans={item.correct_answer} allAns={[item.correct_answer, ...item.incorrect_answers]} setCheck={setCheck}/>
          
            </div> 
          </div>
            )
          }
        </div> 
        {
        !click && <div className=" w-full h-[43rem] absolute top-12">

        </div>}
        { !click && <div className="text-center mt-12">
          YOUR SCORE IS <span className={`${counter ==='A+' || counter === "A" ? 
                                            "text-green-900" : counter === "B+" || counter === "B" ?
                                            "text-green-500" : counter === "C+" || counter === "C" ?
                                            "text-blue-500" : "text-red-900"
                                          } font-bold`}>{counter}</span> 
        </div>}
        <div className="mt-8">
          <div className="mt-20 flex justify-center pb-20">
            {
             click?  <button onClick={()=> {setClick(false); setCheck(true);handleRandom() }} className={`bg-blues p-4 text-white font-bold rounded-lg shadow-2xl`}>Result</button>
              : <button onClick={()=> window.location.reload()} className={` bg-blues p-4 text-white font-bold rounded-lg shadow-2xl`}>Next challenge</button>
             }
          </div>
        </div>
      </div>
    </section>
  )
} 
