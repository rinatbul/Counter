import React, {ChangeEvent, useState} from "react";

type SettingsPropsType = {
    onSetClick: (minValue: number, maxValue: number) => void
}

export const Settings = (props: SettingsPropsType) => {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)

    const setMinInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(e.currentTarget.value))
    }
    const setMaxInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
    }

    const onSetClick = () => {
        props.onSetClick(minValue,maxValue)
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
                <button onClick={onSetClick} className='buttons'>Set</button>
            </div>
        </div>
    );
}