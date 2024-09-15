import { useQuizz } from "../../hooks/useQuizz"

export const Question = () => {



  return (
    <span>Hola</span>

   /*  <div 
      draggable 
      onDragStart={() => (dragQuestion.current = index)}
      onDragEnter={() => (draggedOverQuestion.current = index)}
      onDragEnd={() => moveQuestion(dragQuestion.current, draggedOverQuestion.current)}
      onDragOver={(e)=> e.preventDefault()}
      className="w-100"
    >    
      <div 
        key={field.id}                         
        className="p-2 d-flex align-items-center justify-content-between"
      >            
        <div className="w-75">          
          <input 
            type="text" 
            placeholder="Escriba aquí su pregunta"
            className="form-control"            
            {...register(`fields.${index}.question`)}
          />                   
        </div>
        <div className="w-25 d-flex justify-content-end">
          <button type="button"
            className="btn btn-info btn-sm me-2"               
            onClick={() => addAnswer()}
          >
              + Respuesta
          </button>
          <button type="button"
            className="btn btn-danger btn-sm"
            style={{ border: '1px solid crimson', padding: 8}}
            onClick={() => deleteQuestion(index)}
          >
            X                 
          </button>
        </div>
            
            
            
           {/*  <QuizzAnswers               
              control={control}
              register={register}              
              parentFieldIndex={index}
              childRef={childRef}
            />          */}               
            
          </div>
          </div> */
  )
}
