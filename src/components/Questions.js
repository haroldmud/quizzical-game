import { useState } from "react"

function Question({allAns,correct_ans,isShow,answer, setAnswer,setCounter}){
  const [clicked, setClicked] = useState('')
  // const [] = useState([])

  console.log(answer)

  function handleAns(value){
    if(isShow){
      if(correct_ans ===value ){
        return "bg-green-500"
      }else{
        if(clicked === value)
        return "bg-red-500"
      }
    }
  }
  return (
    <>
      {allAns.sort().map((value,idx)=>{
        return  <button key={idx}
        onClick={()=>{
          if(clicked !== value ){
            setClicked(value);
            setAnswer(prev => [...prev, value])
          }else{
            setClicked(null)
          }
        }}
        className={`${clicked === value  ? "bg-blue-200": "bg-white"} ${handleAns(value)} text-blues border border-blues px-2 rounded-md text-sm font-semibold `}>{value}</button>
      })
      } 
  </>
  )
}

export default Question;