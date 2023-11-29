import React, { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Running</h1>
            <p>{`Count: ${count}.`}</p>
            <button onClick={() => setCount(count+1)}>click to increase count</button>
        </>
    )
}

export default App