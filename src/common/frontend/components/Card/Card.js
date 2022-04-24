import styles from './Card.module.css'

function Card(props) {
    return(
        <div className={styles.card}>
            <p className={styles.header}>
                guest@antonysanchez.com:~$
            </p>
            {props.children}
        </div>
    )
}

export default Card;