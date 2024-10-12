import { useRef, useState } from "react";
import './style.css'

export const DragAndDropContainer = () => {
    const draggingItem = useRef();
    const dragOverItem = useRef();


    const [list, setList] = useState([
        "Chicken Biriyani",
        "Mutton Pulao",
        "Paneer Masala",
        "Tandoori Chicken",
        "Dal Makhana",
        "Malai Kofta",
        ]);

            const handleDragStart = (e, position) => {
            draggingItem.current = position;
            console.log(e.target.innerHTML);
          };

         /*  const handleDragEnter = (e, position) => {
            dragOverItem.current = position;
            console.log(e.target.innerHTML);
           }; */

           const handleDragEnter = (e, position) => {
            dragOverItem.current = position;
            console.log(e.target.innerHTML);
            const listCopy = [...list];
            console.log(draggingItem.current, dragOverItem.current);
            const draggingItemContent = listCopy[draggingItem.current];
            listCopy.splice(draggingItem.current, 1);
            listCopy.splice(dragOverItem.current, 0, draggingItemContent);
            draggingItem.current = dragOverItem.current;
            dragOverItem.current = null;
            setList(listCopy);
            };
        // All dishes above. Indian
        return (
        <>
        {
         list &&
          list.map((item, index) => (
            <h1 
   onDragStart={(e) => handleDragStart(e, index)}
   onDragEnter={(e) => handleDragEnter(e, index)}
   onDragEnd={(e) => handleDragEnter(e, index)}
   key={index}
   draggable
    >
               {item}
             </h1>
            ))}
           </>
          );
};