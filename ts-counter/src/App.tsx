import React, { useState } from 'react';

const App: React.FC = (): JSX.Element => {
    const [counter, setCounter] = useState<number>(0);
    const handleDecreaseCounter = (): void => {
        setCounter(counter - 1);
    };
    const handleIncreaseCounter = (): void => {
        setCounter(counter + 1);
    };
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '200px',
            }}
        >
            <button
                style={{ width: '50px', fontSize: 40 }}
                onClick={() => handleDecreaseCounter()}
            >
                -
            </button>
            <h1>{counter}</h1>
            <button
                style={{ width: '50px', fontSize: 40 }}
                onClick={() => handleIncreaseCounter()}
            >
                +
            </button>
        </div>
    );
};

export default App;
