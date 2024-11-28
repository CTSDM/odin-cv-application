import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordeon from "./components/Accordeon.jsx";
import InputTextSimple from "./components/InputTextSimple.jsx";
import { useState } from "react";
import { basicInformation } from "./template/basicInfo.js";

function App() {
    const [accordeonStatus, setAccordeonStatus] = useState({
        profile: true,
        experience: false,
        education: false,
    });
    function handleStatus(status, toChange) {
        const newStatus = !status[toChange];
        console.log(status);
        setAccordeonStatus({ ...status, [toChange]: newStatus });
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
                status={accordeonStatus.profile}
                onClick={() => handleStatus(accordeonStatus, "profile")}
            >
                {basicInformation.map((info) => (
                    <InputTextSimple
                        key={info.label}
                        name={info.name}
                        label={info.label}
                        type={info.type}
                    />
                ))}
            </Accordeon>
            <Accordeon
                title={"Experience"}
                status={accordeonStatus.experience}
                onClick={() => handleStatus(accordeonStatus, "experience")}
            >
                <InputTextSimple name="Work" type="text" />
                <InputTextSimple name="Work" type="text" />
            </Accordeon>
            <Accordeon
                title={"Education"}
                status={accordeonStatus.education}
                onClick={() => handleStatus(accordeonStatus, "education")}
            >
                <InputTextSimple name="Education" type="text" />
                <InputTextSimple name="Education" type="text" />
            </Accordeon>
        </>
    );
}

export default App;
