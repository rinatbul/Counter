import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";

function App() {
    let [minValue, setMinValue] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    let [error, setError] = useState('')

    const onSetClick = (minValue: number, maxValue: number) => {
        setMinValue(minValue)
        setMaxValue(maxValue)
    }

    const sendErrorMessage = (error: string) => {
        setError(error)
    }

    return (
        <div className="App">
            <Counter minValue={minValue} maxValue={maxValue} error={error}/>
            <Settings onSetClick={onSetClick} sendErrorMessage={sendErrorMessage}/>
        </div>
    );
}

export default App;
