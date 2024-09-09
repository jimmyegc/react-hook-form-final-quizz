import { useForm, FormProvider } from "react-hook-form";
import FieldArray from "./fieldArray";

import "./styles.css";

const defaultValues = {
  test: [
    {
      name: "useFieldArray1",
      nestedArray: [{ field1: "0" }]
    }
  ]
};

export const Quizz = () => {
  const methods = useForm({
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
  } = methods;
  const onSubmit = data => console.log("data", data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Array of Array Fields</h1>
        <p>
          The following example demonstrate the ability of building nested array
          fields.
        </p>
        
        <FieldArray
          {...{ control, register, defaultValues, getValues, errors }}
        />

        <input type="submit" disabled={!formState.isValid} />
      </form>
    </FormProvider>
  );
}
