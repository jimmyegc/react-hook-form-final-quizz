import { useRef } from "react";
import { DefaultValues, useFieldArray, useForm } from "react-hook-form";

type Answer = {
    value: string;
    action: "continue" | "webform";
    webformId?: number;
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
        answers: [{ value: "", action: "continue", webformId: 0 }]        
      }
    ]
  };
  
export const useQuizz = () => {  

  const dragQuestion = useRef<number>(0)
  const draggedOverQuestion = useRef<number>(0)
  const parentFieldIndex = useRef<number>(0)

  const { control, handleSubmit, register } = useForm<FormValues>({ defaultValues });            

  const { 
    fields: questions, 
    append: appendQuestion, 
    remove: removeQuestion, 
    move: moveQuestion 
  } = useFieldArray({ control, name: "fields" });

  const { 
    fields: answers, 
    append: appendAnswer, 
    remove: removeAnswer, 
    move: moveAnswer 
  } = useFieldArray({
    control,
    name: `fields.${parentFieldIndex.current}.answers`
  });
    
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const addQuestion = () => {
    appendQuestion({
      question: [""],
      answers: [{ value: "",  action: "continue", webformId: 0 }],              
    })
  }

  const deleteQuestion = (index: number) => {
    removeQuestion(index);  
  }

  const addAnswer = () => {
    appendAnswer()
  }


    
  return {
    dragQuestion,
    draggedOverQuestion,
    control,
    handleSubmit,
    register,
    onSubmit,
    questions,    
    addQuestion,
    deleteQuestion,
    moveQuestion,    
    answers,
    addAnswer,
    removeAnswer,
    moveAnswer
  }
}
