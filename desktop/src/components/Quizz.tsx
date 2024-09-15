//import { useRef } from "react";
//import { useQuizz } from "../hooks/useQuizz"
import { Collapsible } from '../components/Collapsible/Collapsible'
//import { Question } from "./Question/Question"
//import { Answers } from "./Answers/Answers"

import { useForm, FormProvider } from "react-hook-form";
export const Quizz = () => {
  //const childRef = useRef(null)
  
  //const { control, handleSubmit, register } = useForm<FormValues>({ defaultValues });
  
  const methods = useForm()
  const onSubmit = (data) => console.log(data)
    
  return (<>        
  <FormProvider {...methods}>
    <div className="d-flex align-items-center justify-content-between">
      <h4>Creación de cuestionario:</h4>
      <button type="button" className="btn btn-sm btn-primary" onClick={() => console.log('addQuestion')}>
        +Pregunta
      </button>
    </div>    
    <form onSubmit={methods.handleSubmit(onSubmit)}>      
      {questions.map((field, index) => (<>
        <Collapsible          
          open
          title={
            <span>Question</span>
           /*  <Question 
              field={field} 
              index={index} 
              register={register}          
              dragQuestion={dragQuestion}
              draggedOverQuestion={draggedOverQuestion}
              deleteQuestion={deleteQuestion}
              moveQuestion={moveQuestion}
              appendAnswer={appendAnswer}
          /> */
        }
        >
          {/* <Answers
            register={register}              
            control={control}            
            parentFieldIndex={index}
            childRef={childRef}
          /> */}
          {field} - { index}
        </Collapsible>              
        </>))}             
      <br /> 
      <button>Submit</button>
    </form>
    </FormProvider>
    </>
  )
}
