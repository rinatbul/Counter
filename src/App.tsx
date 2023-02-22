import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";

function App() {
    let [minValue, setMinValue] = useState(0)
    let [maxValue, setMaxValue] = useState(0)

    const onSetClick = (minValue: number, maxValue: number) => {
        setMinValue(minValue)
        setMaxValue(maxValue)
    }

    return (
        <div className="App">
            <Counter minValue={minValue} maxValue={maxValue}/>
            <Settings onSetClick={onSetClick}/>
        </div>
    );
}

export default App;
