
import styles from "./Button.module.css"
const Button=({togglegame,name})=>{
    return(
        <>
        <div className={`${styles.button_container}` }>
        <button onClick={togglegame}>{name}</button>    
        </div>
        </>
    )
}
export default Button;