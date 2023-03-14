import { useEffect, useState } from "react";
import {IoCloseCircle, IoCheckmarkCircle} from 'react-icons/io5'

export default function Operation() {
  const correction = ['Mudflap', 'Charlotte Brontë', 'True']
  const [answer, setAnswer] = useState([])
  const [assertOne, setAssertOne] = useState([{name: "Mudflap", isSelected: false},{name: "Ratchet", isSelected: false} ,{name: "Sideswipe", isSelected: false},{name: "Skids", isSelected: false}])
  const [assertTwo, setAssertTwo] = useState([{name: "Charlotte Brontë", isSelected: false},{name: "Emily Brontë", isSelected: false},{name: "Jane Austen", isSelected: false},{name: "Louisa May Alcott", isSelected: false}])
  const [assertThree, setAssertThree] = useState([{name: "True", isSelected: false},{name: "False", isSelected: false}])
  function handleCorrectOne(index){
    setAssertOne(prev => prev.map((item, x) => ({...item, isSelected: x === index})))
  }
  function handleCorrectTwo(index){
    setAssertTwo(prev => prev.map((item, y)=> ({...item, isSelected: index === y})))
  }
  function handleCorrectThree(index){
    setAssertThree(prev => prev.map((item,z)=>({...item, isSelected: index === z})))  
  }
  function handleAnswers(){
    const newArr = [];
    const arr = [...assertOne, ...assertTwo, ...assertThree];
    for(let i=0; i<arr.length; i++){
      if(arr[i].isSelected ===true){
        newArr.push(arr[i].name)
      }
    }
    return newArr;
  }
  const [questionOne, setQuestionOne] = useState(null)
  const [result, setResult] = useState([]);
  function handleResultOne(){
    if(assertOne[0].isSelected === true) {
      setQuestionOne(1);
      setResult(result => [...result, 'correct'])
    }else{setQuestionOne(0)}
  }
  const [questionTwo, setQuestionTwo] = useState(null)
  function handleResultTwo(){
    if(assertTwo[0].isSelected === true) {
      setQuestionTwo(1)
      setResult(result => [...result, 'correct']) } else{setQuestionTwo(0)}
  }
  const [questionThree, setQuestionThree] = useState(null)
  function handleResultThree(){
    if(assertThree[0].isSelected === true) {
      setQuestionThree(1)
      setResult(result => [...result, 'correct'])
    }else{
      setQuestionThree(0)
    }
  }
  const [showResult, setShowResult] = useState(false)
  return (
    <section className="flex justify-center pt-20">
      <div className="w-6/12">
        <div>
          <p className="text-blues font-bold tex-xl">Which of the following Autobot names in Michael Bay's movies was NOT a name for a Transformer in the original 1980's cartoon?</p>
          <div className="flex justify-between">
            <div className="flex gap-4 mt-4">
              {assertOne.map((item,idx)=>
                  <button key={idx}
                    onClick={()=>{handleCorrectOne(idx)}}
                  className={`${item.isSelected === true ? "bg-blue-200" : ""}  text-blues border border-blues px-2 rounded-md text-sm font-semibold `}>{item.name}</button>
                )}
            </div>
            { questionOne === 0 ? <button className="text-red-500 text-2xl"><IoCloseCircle/></button> : questionOne === 1 ? <button className="text-green-500 text-2xl"><IoCheckmarkCircle/></button> : ""}  
          </div>
        </div>
        <div className="mt-8">
          <p className="text-blues font-bold tex-xl">The novel "Jane Eyre" was written by what author?</p>
          <div className="flex justify-between">
            <div className="flex gap-4 mt-4">
              {assertTwo.map((item,idx)=>
                <button key={idx}
                onClick={()=>{handleCorrectTwo(idx)}}
                className={`${item.isSelected === true ? "bg-blue-200" : ""}  text-blues border border-blues px-2 rounded-md text-sm font-semibold `}>{item.name}</button> ) }
            </div>
            { questionTwo === 0 ? <button className="text-red-500 text-2xl"><IoCloseCircle/></button> : questionTwo === 1 ? <button className="text-green-500 text-2xl"><IoCheckmarkCircle/></button> : ""}
          </div>
          <div className="mt-8">
          <p className="text-blues font-bold tex-xl">Oxford University is older than the Aztec Empire.</p>
            <div className="flex justify-between">
              <div className="flex gap-4 mt-4">
                {assertThree.map((item,idx)=>
                  <button key={idx}
                  onClick={()=>{handleCorrectThree(idx)}}
                  className={`${item.isSelected === true ? "bg-blue-200" : ""}  text-blues border border-blues px-2 rounded-md text-sm font-semibold `}>{item.name}</button>) }
              </div>
              { questionThree === 0 ? <button className="text-red-500 text-2xl"><IoCloseCircle/></button> : questionThree === 1 ? <button className="text-green-500 text-2xl"><IoCheckmarkCircle/></button> : ""}
            </div>
          </div>
          <div><p className={`${showResult ? "" : 'hidden'} text-center font-bold text-blue-500`}>{`Your result is ${result.length} / 3`}</p></div>
          <div className="mt-20 flex justify-center">{showResult ? <button onClick={()=> window.location.reload()} className="bg-blues p-4 text-white font-bold rounded-lg shadow-2xl">Next challenge</button>:<button onClick={()=>{setAnswer(handleAnswers());handleResultOne();handleResultTwo();handleResultThree(); setShowResult(true)}} className="bg-blues p-4 text-white font-bold rounded-lg shadow-2xl">Result</button>}</div>
        </div>
      </div>
    </section>
  )
} 