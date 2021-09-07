import { useState } from "react";

import styles from "./Todos.module.css"

import TodosItem from "./TodosItem";

const Todos = () => {

    const [text, setText] = useState();
    const [todoList, setTodoList] = useState([])
    
    const handleChange = (e) => {
        setText(e.target.value);
        console.log(e.target.value);
    }
    const handleClick = () => {
        setTodoList([...todoList, text]);
        setText("")
        console.log(text)

    }
    
    return <div>
        
        <input className={styles.inp} value = {text} onChange={handleChange} type="text" placeholder="Add todo"/>
        <button className={styles.add} onClick={handleClick} >+</button>
        {todoList.map(el =>
            <TodosItem e={el} ></TodosItem>)}
        
    </div>
}

export {Todos}