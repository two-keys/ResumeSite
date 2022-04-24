import styles from './Card.module.css'

function Card(props) {
    const { header } = props;

    return(
        <div className={styles.card}>
            <p className={styles.header}>
                guest@antonysanchez.com:~$ {header}
            </p>
            {props.children}
        </div>
    )
}

export default Card;