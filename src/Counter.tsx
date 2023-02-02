import React from "react";

type CounterPropsType = {
    count: number
    minValue: number
    maxValue: number
    onClick: (newCount: number) => void
}

export const Counter = (props: CounterPropsType) => {

    const onIncPressHandler = () => {
        if (props.count < props.maxValue) {
            props.onClick(props.count + 1)
        }
    }

    const onResetPressHandler = () => {
        props.onClick(props.minValue)
    }

    return (
        <div className='wrapper'>
            <div className='counter-input-wrapper'>
                <input className='counter-input' value={props.count}/>
            </div>
            <div className='buttons-wrapper'>
                <button onClick={onIncPressHandler} className='buttons'>INC</button>
                <button onClick={onResetPressHandler} className='buttons'>reset</button>
            </div>
        </div>
    );
}