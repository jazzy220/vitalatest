import styles from "./StartGame.module.css"
import Button from "../Button/Button"
const StartGame=({togglegame})=>{
return(
        <>
        <div className={`${styles.container_start}`}>
            <div>
            <img src=".../src/assets/images.dice 1.png" alt="dice img"></img>
            </div>
            <div className={`${styles.content}`}>
            <h1>Dice Game</h1>
            <div className={`${styles.button_style}`}>
            <Button name={"play now"} togglegame={togglegame}></Button>
            </div>
        </div>
        </div>   
        </>
    )
}
export default StartGame