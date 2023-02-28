import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header/Header";
import Oscar from "./components/Navbar/Oscar";
import Button from "./components/Button/Button";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Oscar styles={{border: '1px solid black' , padding:'1 rem' , color:'red'}} />
            <Button handleClick={() => {
                console.log("Yes")
            }} />
        </div>
    );
}

export default App;
