import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";

function App() {
    const [count, setCount] = useState(0);
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)

    const onClick = (count: number) => {
       setCount(count)
    }

    const onInputChange = (minValue: number, maxValue:number) => {
        setCount(minValue)
        setMinValue(minValue)
        setMaxValue(maxValue)
    }

    return (
        <div className="App">
            <Counter count={count}
                     minValue={minValue}
                     maxValue={maxValue}
                     onClick={onClick}/>
            <Settings onInputChange={onInputChange}/>
        </div>
    );
}

export default App;
