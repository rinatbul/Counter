import React, {useState} from "react";
import styles from './Counter.module.css'

type CounterPropsType = {
    minValue: number
    maxValue: number
    error:string
}
export const Counter = (props: CounterPropsType) => {
    let [count, setCount] = useState(0);

    const onIncPressHandler = () => {
        count < props.maxValue ? setCount(count + 1) : setCount(count);
    }

    const onResetPressHandler = () => setCount(props.minValue)

    props.minValue > count ? setCount(props.minValue) : console.log();

    return (
        <div className={styles.wrapper}>
            <div className={styles.counter_input_wrapper}>
                <textarea className={props.error?styles.error_input:styles.counter_input} value={props.error?props.error:count}/>
            </div>
            <div className={styles.buttons_wrapper}>
                <button onClick={onIncPressHandler}
                        className={styles.buttons}
                        disabled={!!props.error || count === props.maxValue}>INC
                </button>
                <button onClick={onResetPressHandler}
                        className={styles.buttons}
                        disabled={!!props.error || count === props.minValue}>reset
                </button>
            </div>
        </div>
    );
}