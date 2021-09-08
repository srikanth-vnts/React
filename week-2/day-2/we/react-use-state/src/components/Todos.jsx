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
        const payload = {
            title: text,
            status:false
        }
        setTodoList([...todoList, payload]);
        setText("")
        console.log([...todoList, payload])

    } 
    const handleToggle = (title) => {
     const arr =   todoList.map((el) => {
            if (el.title === title) {
                el.status = true;
            }
            return el;
        })
        setTodoList(arr)
    }


    return <div>
        
        <input className={styles.inp} value = {text} onChange={handleChange} type="text" placeholder="Add todo"/>
        <button className={styles.add} onClick={handleClick} >+</button>
        {todoList.map(el =>
            <TodosItem e={el} fun ={handleToggle} ></TodosItem>)}
        
    </div>
}

export {Todos}