import React, {ChangeEvent, useState} from "react";

type SettingsPropsType = {
    onSetClick: (minValue: number, maxValue: number) => void
    errorMessage: (error: string) => void
}

export const Settings = (props: SettingsPropsType) => {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)

    const setMinInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (!isNaN(Number(e.currentTarget.value))){
            setMinValue(Number(e.currentTarget.value))
        } else {
            props.errorMessage('Incorrect minimum value! Please set the number')
        }
    }
    const setMaxInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (!isNaN(Number(e.currentTarget.value))){
            setMaxValue(Number(e.currentTarget.value))
        } else {
            props.errorMessage('Incorrect maximum value! Please set the number')
        }
    }

    if (maxValue === minValue && minValue !== 0) {
        props.errorMessage('Minimum and maximum values are equal!')
    }
    if (maxValue < minValue && maxValue !== 0) {
        props.errorMessage('Minimum value greater than maximum!')
    }

    const onSetClick = () => {
        props.onSetClick(minValue, maxValue)
        props.errorMessage('')
    }

    return (
        <div className='wrapper'>
            <div className='settings-input-wrapper'>
                <p>Min <input value={minValue} onChange={setMinInputValue}/></p>
            </div>
            <div className='settings-input-wrapper'>
                <p>Max <input value={maxValue} onChange={setMaxInputValue}/></p>
            </div>
            <div className='buttons-wrapper'>
                <button onClick={onSetClick}
                        className='buttons'
                        disabled={minValue > maxValue || minValue === maxValue}>Set
                </button>
            </div>
        </div>
    );
}