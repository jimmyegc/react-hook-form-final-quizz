

export const Answers = () => {

 

 return (<>
<div>Answers</div>

    {/* <fieldset>
      <legend>Respuestas</legend>            
      {fields.map((field, index) => (
        <fieldset key={field.id}        
        draggable         
        onDragStart={() => (dragAnswer.current = index)}
        onDragEnter={() => (draggedOverAnswer.current = index)}
        onDragEnd={() => move(dragAnswer.current, draggedOverAnswer.current)}
        onDragOver={(e)=> e.preventDefault()}
        className={`${dragAnswer.current === index ? 'dragging' : ''}`} 
        style={{ border: '1px solid green'}}
        >
          <legend>Respuesta #{index+1}</legend>          
          <input
            {...register(`fields.${parentFieldIndex}.answers.${index}.value`)}
            style={{ border: '1px solid gray', margin: 10}}
          />

<fieldset>
  <legend>Acciones:</legend>

  <div>
    <input type="radio" id="continue" name="action" value="continue" checked />
    <label htmlFor="continue">Continuar</label>
  </div>

  <div>
    <input type="radio" id="webform" name="action" value="webform" />
    <label htmlFor="webform">Webform</label>
  </div>
  
</fieldset>


          <select name="" id="">
            <option value="">Select</option>
            <option value="">Webform #1</option>
            <option value="">Webform #2</option>
            <option value="">Webform #3</option>
          </select>
          <button type="button" onClick={() => remove(index)}>
            Eliminar (<i>Respuesta</i>)
          </button>
        </fieldset>
      ))}
     
    </fieldset>
     */}
    </>);
}
