import styles from "./all.module.css"

function Block(heading) {
    return (
        <div className={styles['block']} >{heading}</div>
    )
}

export default Block;


            