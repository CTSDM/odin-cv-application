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

    const [inputPersonal, setInputPersonal] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
    ]);

    // use of currying function!
    function handleChange(index) {
        return function (event) {
            const auxValues = inputPersonal.slice();
            auxValues[index] = event.currentTarget.value;
            setInputPersonal(auxValues);
        };
    }

    return (
        <>
            <div>
                <h1>CV Generator</h1>
            </div>
            <div className="container">
                <div className="inputs">
                    <Accordeon
                        title={"Profile"}
                        status={accordeonStatus.profile}
                        onClick={() => handleStatus("profile")}
                    >
                        {basicInformation.map((info, index) => (
                            <InputTextSimple
                                key={info.label}
                                name={info.name}
                                label={info.label}
                                type={info.type}
                                value={inputPersonal[index]}
                                onChange={handleChange(index)}
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
                        <BlockExperience
                            name={"Education"}
                            type={"education"}
                        />
                    </Accordeon>
                </div>
            </div>
        </>
    );
}

export default App;
