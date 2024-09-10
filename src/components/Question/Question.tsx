import { useFieldArray } from "react-hook-form"
import { Answer } from "../Answer/Answer";
import { useRef } from "react";

/*
interface QuestionProps {
  id: string
  index: number
  onAddAnswer: () => void
  onDeleteQuestion: (index: number) => void  
} 
  */

export const Question = ({ control, register, defaultValues, errors }) => {
  
  const { fields: questions, append, remove } = useFieldArray({
    control,
    name: "questions"
  });


  return (<>
    <div className="d-flex align-items-center justify-content-between">
        <h4>Creación de cuestionario:</h4>
        <button
        type="button"
        onClick={() => {
          append({ name: "Pregunta" });
        }}
      >
        +Pregunta
      </button>
      </div>   
      <div
      className="p-2 d-flex align-items-center justify-content-between"
    >
     
      
      <ul>
        {questions.map((item, index) => {
          return (
            <li key={item.id}>
                          
              <Answer 
                nestIndex={index}            
                onDeleteQuestion={()=> remove(index)}    
                {...{ control, register, errors }}
              />

             {/*  <NestedArray
                nestIndex={index}
                {...{ control, register, errors }}
              />  */}

            </li>
          );
        })}
      </ul>

      

      {/* <div className="w-75">      
        <input 
          type="text" 
          placeholder="Escriba aquí su pregunta"
          className="form-control"            
          {...register(`fields.${index}.question`)}
        />        
      </div>   
      <div className="w-25 d-flex justify-content-end">
        <button 
          className="btn btn-info btn-sm me-2"     
          onClick={() => onAddAnswer()}
        >+ Respuesta</button>
        <button 
          className="btn btn-danger btn-sm"
          onClick={() => onDeleteQuestion(index)}
        >X</button>
      </div>       */}
    </div>
  </>
   
  )
}
