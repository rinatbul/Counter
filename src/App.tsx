import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";

function App() {
    let [minValue, setMinValue] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    let [isError, setIsError] = useState(false)

    const onSetClick = (minValue: number, maxValue: number) => {
        setMinValue(minValue)
        setMaxValue(maxValue)
        minValue >= maxValue && maxValue != 0 ? setIsError(true) : setIsError(false)
    }

    return (
        <div className="App">
            <Counter minValue={minValue} maxValue={maxValue} isError={isError}/>
            <Settings onSetClick={onSetClick}/>
        </div>
    );
}

export default App;
