import React, {useState} from "react";

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
        <div className='wrapper'>
            <div className='counter-input-wrapper'>
                <textarea className={props.error?'error-input':'counter-input'} value={props.error?props.error:count}/>
            </div>
            <div className='buttons-wrapper'>
                <button onClick={onIncPressHandler}
                        className='buttons'
                        disabled={!!props.error || count === props.maxValue}>INC
                </button>
                <button onClick={onResetPressHandler}
                        className='buttons'
                        disabled={!!props.error || count === props.minValue}>reset
                </button>
            </div>
        </div>
    );
}