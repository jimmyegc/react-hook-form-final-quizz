import { useQuizz } from './Quizz'
export const Profiling = () => {

    const { questions, step, nextStep } = useQuizz()

  return (    
    <>    
    <div>
        <h4>{step < questions.length && questions[step].question}</h4>
        { step < questions.length ? <span>Pregunta #{step+1}</span> : <span>¡Terminado!</span>}

        <section> 
            <ul>
                {step < questions.length && questions[step].answers.map((item, index) => (
                  <li key={index}>
                    <button
                    onClick={() => nextStep(item.answer)}
                    >
                    {item.answer}
                    </button>
                </li>
                ))}
                
            </ul>
        </section>
    </div>      
    </>
  )  
}
