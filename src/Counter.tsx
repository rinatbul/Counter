import React, {useState} from "react";

type CounterPropsType = {
    minValue: number
    maxValue: number
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
                <input className='counter-input' value={count}/>
            </div>
            <div className='buttons-wrapper'>
                <button onClick={onIncPressHandler}
                        className='buttons'
                        disabled={count === props.maxValue}>INC
                </button>
                <button onClick={onResetPressHandler}
                        className='buttons'
                        disabled={count === props.minValue}>reset
                </button>
            </div>
        </div>
    );
}