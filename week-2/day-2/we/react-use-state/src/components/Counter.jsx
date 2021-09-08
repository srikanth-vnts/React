import { useState } from "react"
import styles from "./counter.module.css"

function Counter() {

    const [counter, setCounter] = useState(0);
    
    const changer = (e) =>{
        const n = counter + e;
        setCounter(n);
    }
    const multiply = (e) =>{
        const n = counter * e;
        setCounter(n);
    }
    return (
        <div>
            <h4>COUNT : {counter}</h4>
            <div className = {styles.changers}>
                <button onClick={() => { changer(1) }}>Increment</button>
                <button onClick={() => { changer(-1) }}>Decrement</button>
                <button onClick={() => { multiply(2) }}>Double</button>
            </div>
        </div>
    )
}

export default Counter;