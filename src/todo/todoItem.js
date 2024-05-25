import React from "react";
const TodoItem = ({ todos,handleDelete,handleComplete }) => {
return (
    <div style={{ textAlign: "left" }}>
        <div>
            {todos &&
                todos?.map((todo, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center" }}>
                        <input type="checkbox" onClick={()=>handleComplete(index)} checked={todo?.status}/>
                        <span style={{ marginLeft: "8px", textDecoration: todo?.status ? "line-through" : "none" }}>{todo?.name}</span>
                        <button style={{ marginLeft: "8px" }} onClick={()=>handleDelete(index)}>Delete</button>
                    </div>
                ))}
        </div>
    </div>
);
};

export default TodoItem;
