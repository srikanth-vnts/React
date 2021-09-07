
import styles from "./TodosItem.module.css"

const checked = (e) => {
    
}

const TodosItem = (props) => {
    return <div className={styles.tasks}>{props.e} <input className={styles.check} type="checkbox"/></div> 
}


export default TodosItem;