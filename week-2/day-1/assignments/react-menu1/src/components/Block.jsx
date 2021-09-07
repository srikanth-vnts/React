import styles from "./all.module.css"

function Block(props) {
    return (
        <div style={{ background: props.colors }} className={styles['block']} >{props.heading}</div>
    )
}

export default Block;


            