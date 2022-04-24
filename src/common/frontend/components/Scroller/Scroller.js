import styles from './Scroller.module.css'

function Scroller(props) {
    return(
        <div className={styles.scroller}>
            {props.children}
        </div>
    )
}

export default Scroller;