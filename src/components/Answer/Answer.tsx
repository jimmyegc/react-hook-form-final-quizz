import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form"
import { Collapsible } from "../Collapsible/Collapsible";


export const Answer = ({ nestIndex, onDeleteQuestion, control, register, errors }) => {  
  const { fields, remove, append, insert } = useFieldArray({
    control,
    name: `questions[${nestIndex}].answers`
  });

  const [counter, setCounter] = useState(0)

  const addAnswer = () => {
    append({ field1: "field1" })
  }

  useEffect(()=> {
    setCounter(fields.length)
  },[fields])

  return (<>
  
  <Collapsible
            open
            title={<>
            
            <input type="text"
          name={`questions[${nestIndex}].name`}
                {...register(`questions[${nestIndex}].name`, { required: { value: true, message: "Requerido" } }) }
              />

<button type="button" onClick={() => addAnswer()}>+Answer</button>

<button type="button" onClick={onDeleteQuestion}>
  Delete Question
</button>
            </>}              
          >                  
              <div style={{ marginLeft: 10, borderLeft: "2px solid red" }}>
        # fields: {counter}
        {fields.map((item, k) => {
          return (
            <div
              key={item.id}
              style={{ height: "50px", display: "flex", marginLeft: 10 }}
            >
              {/* {item.id} */}
              <input 
                type="number"
                name={`questions[${nestIndex}].answers[${k}].field1`}
                {...register(`questions[${nestIndex}].answers[${k}].field1`, {
                  required: { value: true, message: "Required" },
                  min: { value: 0, message: "Min: 0" }
                })}
              />
              {/* <Input
                type="number"
                name={`test[${nestIndex}].nestedArray[${k}].field1`}
                register={register({
                  required: { value: true, message: "Required" },
                  min: { value: 0, message: "Min: 0" }
                })}
                defaultValue={item.field1}
                style={{ marginRight: "25px" }}
              /> */}
              <button
                type="button"
                onClick={() => remove(k)}
                style={{ height: "40px", marginTop: 0 }}
              >
                Delete
              </button>
            </div>
          );
        })}

        {/* <button
          type="button"
          onClick={() => append({ field1: "field1" })}
          style={{ marginLeft: "10px" }}
        >
          Append Nested
        </button> */}
      </div>
          </Collapsible>  


          <div>
      

    

      <hr />
    </div>

  </>
    
  );
}

/*
interface AnswerProps {
  index: number   
} 

export const Answer = forwardRef(({ index }: AnswerProps, ref) => { 
  useImperativeHandle(ref, () => ({
    addAnswer() {
      handleAddAnswer()
    },
  })) 
  const { register, control } = useFormContext()
  const { 
    fields: answers, 
    append: appendAnswer, 
    remove: removeAnswer, 
    //move: moveAnswer 
  } = useFieldArray({ control, name: `fields.${index}.answers` });

  const handleAddAnswer = () => {
    appendAnswer({ parent: index, value: "" })
  }

  const handleDeleteAnswer = (index: number) => {
    removeAnswer(index)
  }

 
  return (<>    
    {answers.map((_, indexAnswer) => (
      <div key={indexAnswer} className="d-flex">
        <div className="w-50">
          <li>Respuesta {indexAnswer+1}:</li>
          <input
            className="form-control"
            {...register(`fields.${index}.answers.${indexAnswer}.value`)}
            placeholder="Escriba aquí su respuesta..."          
          />   
        </div>
        <div className="w-50">          
          
          <div className="">       
            <li className="ms-2" style={{ listStyleType: "none" }}>Acción:</li>     
            <div className="d-flex">
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <input className="ms-2" type="radio" id={`fields.${index}.answers.${indexAnswer}.action1`} 
                    name={`fields.${index}.answers.${indexAnswer}.action`} value="continue" />
                  <label className="ms-1" htmlFor={`fields.${index}.answers.${indexAnswer}.action1`}>Avanzar</label>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <input className="ms-2" type="radio" id={`fields.${index}.answers.${indexAnswer}.action2`} 
                      name={`fields.${index}.answers.${indexAnswer}.action`} value="webform" />
                    <label className="ms-1" htmlFor={`fields.${index}.answers.${indexAnswer}.action2`}>Abrir WebForm</label>                        
                  </div>
                  <div>
                    <select className="form-control ms-2" style={{ width: 280 }}>
                      <option value="0">Select car:</option>
                      <option value="1">Audi</option>
                      <option value="2">BMW</option>
                      <option value="3">Citroen</option>
                      <option value="4">Ford</option>
                      <option value="5">Honda</option>
                      <option value="6">Jaguar</option>
                      <option value="7">Land Rover</option>
                      <option value="8">Mercedes</option>
                      <option value="9">Mini</option>
                      <option value="10">Nissan</option>
                      <option value="11">Toyota</option>
                      <option value="12">Volvo</option>
                    </select>   
                  </div>
                </div>  
              </div>                                           
              
              <div className="d-flex align-items-center justify-content-center">
                <button 
                  className="btn btn-danger ms-2"
                  onClick={() => handleDeleteAnswer(indexAnswer)}
                >X</button>
                <button
                onClick={handleAddAnswer}
                >+</button>
              </div>
            </div>

          </div>
          <div className="w-50 d-flex">       
            <div className="d-flex align-items-center">
                      
            </div>                 
            <div className="d-flex align-items-center">             
            </div>
          </div>              
          
        </div>              
      </div>    
    ))}    
  </>)
})

*/