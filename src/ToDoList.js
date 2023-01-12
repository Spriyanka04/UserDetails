import React from "react";

const ToDoList= (props)=>{

    return (
    <>
    <div className="todo_style">
        {/* < button className="close" aria-hidden="true"
         onClick={()=>{
            props.onselect(props.id);
         }}
        /> */}
     <li>{props.txt}</li>
     </div>
     </>);
}

export default ToDoList;