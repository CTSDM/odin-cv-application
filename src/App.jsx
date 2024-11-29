import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordeon from "./components/Accordeon.jsx";
import InputTextSimple from "./components/InputTextSimple.jsx";
import { useState } from "react";
import { basicInformation } from "./template/basicInfo.js";
import BlockExperience from "./components/BlockExperience.jsx";

function App() {
    const [accordeonStatus, setAccordeonStatus] = useState({
        profile: true,
        experience: false,
        education: false,
    });

    function handleStatus(toChange) {
        const newStatus = !accordeonStatus[toChange];
        setAccordeonStatus({ ...accordeonStatus, [toChange]: newStatus });
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
                onClick={() => handleStatus("profile")}
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
                onClick={() => handleStatus("experience")}
            >
                <BlockExperience name={"Experience"} type={"career"} />
            </Accordeon>
            <Accordeon
                title={"Education"}
                status={accordeonStatus.education}
                onClick={() => handleStatus("education")}
            >
                <BlockExperience name={"Education"} type={"education"} />
            </Accordeon>
        </>
    );
}

export default App;
