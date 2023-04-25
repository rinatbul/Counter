import React, {ChangeEvent, useState} from "react";
import styles from './Settings.module.css';

type SettingsPropsType = {
    onSetClick: (minValue: number, maxValue: number) => void
    sendErrorMessage: (error: string) => void
}

export const Settings = (props: SettingsPropsType) => {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)

    const setMinInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(e.currentTarget.value.replace(/[^0-9.]/g, '')))
    }
    const setMaxInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value.replace(/[^0-9.]/g, '')))
    }

    if (maxValue === minValue && minValue !== 0) {
        props.sendErrorMessage('Minimum and maximum values are equal!')
    }
    if (maxValue < minValue && maxValue !== 0) {
        props.sendErrorMessage('Minimum value greater than maximum!')
    }

    const onSetClick = () => {
        props.onSetClick(minValue, maxValue)
        props.sendErrorMessage('')
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.settings_input_wrapper}>
                <p>Min <input value={minValue} onChange={setMinInputValue}/></p>
            </div>
            <div className={styles.settings_input_wrapper}>
                <p>Max <input value={maxValue} onChange={setMaxInputValue}/></p>
            </div>
            <div className={styles.buttons_wrapper}>
                <button onClick={onSetClick}
                        className={styles.buttons}
                        disabled={minValue > maxValue || minValue === maxValue}>Set
                </button>
            </div>
        </div>
    );
}