
import styles from "./TodosItem.module.css"



// const task = {
 
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: "7px",
//     width:"16.7rem",
//     height:"2rem",
//     borderRadius: "10px",
//     background: "rgb(253, 253, 253)"   ,
//     paddingLeft: "10px",
//     paddingTop: "7px",
//     fontSize: '20px',
//     fontFamily:'monospace',
//     textDecoration: 'none',

// }

const TodosItem = (props) => {
    const checked = (e) => {
        props.fun(e);
    }
    return <div className={styles.tasks}>{props.e.title} <input onClick={() => { checked(props.e.title) }} className={styles.check} type="checkbox"/></div>
}


export default TodosItem;