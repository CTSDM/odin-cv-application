import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordeon from "./components/Accordeon.jsx";
import InputTextSimple from "./components/InputTextSimple.jsx";
import { useState } from "react";

function App() {
    const [accordeonStatus, setAccordeonStatus] = useState(true);
    function handleStatus() {
        setAccordeonStatus(!accordeonStatus);
    }
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>CV Generator</h1>
            <Accordeon
                title={"Profile"}
                status={accordeonStatus}
                onClick={handleStatus}
            >
                <InputTextSimple name="First Name" type="text" />
                <InputTextSimple name="Last Name" type="text" />
                <InputTextSimple name="Profession" type="text" />
                <InputTextSimple name="Email" type="email" />
                <InputTextSimple name="Phone" type="tel" />
                <InputTextSimple name="Location" type="text" />
            </Accordeon>
            <Accordeon
                title={"Experience"}
                status={!accordeonStatus}
                onClick={handleStatus}
            >
                <InputTextSimple name="Work" type="text" />
                <InputTextSimple name="Work" type="text" />
            </Accordeon>
        </>
    );
}

export default App;
