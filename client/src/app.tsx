import React, { useState } from "react";
import Header from "./components/header";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
        </>
    )
}

export default App