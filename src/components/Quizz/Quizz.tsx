import { DefaultValues, FormProvider, useFieldArray, useForm } from "react-hook-form"
import { Question } from "../Question/Question"
import { Collapsible } from "../Collapsible/Collapsible";
import { Answer } from "../Answer/Answer";
import { useRef } from "react";
//import { useEffect, useRef } from "react";

type Answer = {
  answer: string;
  action: "continue" | "webform",
  webformId: number | null
};

type Field = {
  question: Array<string>;
  answers: Array<Answer>;  
};

type FormValues = {
  fields: Array<Field>;
};

const defaultValues: DefaultValues<FormValues> = {
  fields: [
    {
      question: [""],
      answers: [{ answer: "", action: "continue", webformId: null }]        
    }
  ]
};
export const Quizz = () => {
  
  const childCompRef = useRef<any>()
  const dragQuestion = useRef<number>(0)
  const draggedOverQuestion = useRef<number>(0)

  const methods = useForm<FormValues>({
    mode: "onChange",
    defaultValues
  });
  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    formState  
  } = methods
  const onSubmit = (data) => console.log("data", data)
  
  /*const { fields: questions, 
    append: addQuestion, 
    remove: deleteQuestion,     
    move: moveQuestion 
  } = useFieldArray({ control, name: "fields" });

  const handleAddQuestion = () => {
    addQuestion({
      question: [""],
      answers: [{ answer: "", action: "continue", webformId: null }]   
      //question: [""],
      //answers: [{ value}],              
      },
    )
  } */

  //console.log(JSON.stringify(questions))

  return (<>
    <FormProvider {...methods}>      
      <div className="d-flex align-items-center justify-content-between">
        <h4>Creación de cuestionario:</h4>
        {/* <button type="button" className="btn btn-sm btn-primary" onClick={handleAddQuestion}>
          +Pregunta
        </button> */}
      </div>    
      <form onSubmit={methods.handleSubmit(onSubmit)}>

        <Question 
          {...{control, register, defaultValues, getValues, errors }}
        />
    {/*   {questions.map((question, index) => (      
        <div key={question.id}>      
          <Collapsible
            open
            title={
              <div 
                draggable 
                onDragStart={() => (dragQuestion.current = index)}
                onDragEnter={() => (draggedOverQuestion.current = index)}
                onDragEnd={() => moveQuestion(dragQuestion.current, draggedOverQuestion.current)}
                onDragOver={(e)=> e.preventDefault()}
                className="w-100"
                style={{ cursor: 'grabbing' }}
              >
                <Question 
                  id={question.id}
                  index={index}  
                  onAddAnswer={() => childCompRef.current.addAnswer()}               
                  onDeleteQuestion={deleteQuestion} 
                />
              </div>}              
          >                  
            <Answer 
              index={index} 
              ref={childCompRef}
              {...{ control, register, errors} }
            />
          </Collapsible>          
        </div>              
    ))} */}
       
        <br />
        <input type="submit" value="guardar" disabled={!formState.isValid} />
      </form>      
    </FormProvider>
  </>)
}