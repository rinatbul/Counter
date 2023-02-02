import React, {useRef} from "react";

type SettingsPropsType = {
    onInputChange: (minValue: number, maxValue: number) => void
}

export const Settings = (props: SettingsPropsType) => {
    const minValueRef = useRef<HTMLInputElement>(null);
    const maxValueRef = useRef<HTMLInputElement>(null);

    const onClick = () => {
        const minValue = minValueRef.current as HTMLInputElement
        const maxValue = maxValueRef.current as HTMLInputElement
        props.onInputChange(Number(minValue.value), Number(maxValue.value))
    }

    return (
        <div className='wrapper'>
            <div className='settings-input-wrapper'>
                <p>Min <input ref={minValueRef}/></p>
            </div>
            <div className='settings-input-wrapper'>
                <p>Max <input ref={maxValueRef}/></p>
            </div>
            <div className='buttons-wrapper'>
                <button onClick={onClick} className='buttons'>Set</button>
            </div>
        </div>
    );
}