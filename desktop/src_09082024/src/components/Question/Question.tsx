import { useFormContext } from "react-hook-form"

interface QuestionProps {
  id: string
  index: number
  onAddAnswer: () => void
  onDeleteQuestion: (index: number) => void  
}

export const Question = ({ id, index, onAddAnswer, onDeleteQuestion }: QuestionProps) => {
  const { register } = useFormContext()  

  return (
    <div
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
        <button 
          className="btn btn-info btn-sm me-2"     
          onClick={() => onAddAnswer()}
        >+ Respuesta</button>
        <button 
          className="btn btn-danger btn-sm"
          onClick={() => onDeleteQuestion(index)}
        >X</button>
      </div>      
    </div>
  )
}
