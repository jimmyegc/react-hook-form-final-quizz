import React from "react";
import { useFieldArray } from "react-hook-form";


import Input from "./components/input";
import { NestedArray } from "./nestedFieldArray";

let renderCount = 0;

export default function Fields({ control, register, defaultValues, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test"
  });

  renderCount++;

  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
             {/*  <Input
                name={`test[${index}].name`}
                register={register({
                  required: { value: true, message: "Required" }
                })}
                defaultValue={item.name}
              /> */}

              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
              <NestedArray
                nestIndex={index}
                {...{ control, register, errors }}
              />
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => {
          append({ name: "append" });
        }}
      >
        append
      </button>

      <span className="counter">Render Count: {renderCount}</span>
    </>
  );
}
