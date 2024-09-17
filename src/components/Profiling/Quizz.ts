import { useEffect, useState } from "react"
import { questionsData } from "./Questions"

export const useQuizz = () => {

  const [questions, setQuestions] = useState(questionsData)
  const [step, setStep] = useState(0)

  const nextStep = (answer) => {
    if(step<questionsData.length) {
      console.log("seleccione:", answer)
      setStep(step + 1);
    } else {
      console.log('ya no hay data')
    }
  }

/*   useEffect(()=> {
    setQuestions(questionsData)
  },[]) */

  
  return {
    questions,
    step,
    nextStep
  }
}
