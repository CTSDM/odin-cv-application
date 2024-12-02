import "./App.css";
import Accordion from "./components/Accordion.jsx";
import InputTextSimple from "./components/InputTextSimple.jsx";
import { useState } from "react";
import { basicInformation } from "./template/basicInfo.js";
import BlockExperience from "./components/BlockExperience.jsx";
import experience from "./template/experience.js";
import Preview from "./components/Preview.jsx";
import placeholders from "./template/placeholders.js";

function App() {
    const [accordionStatus, setAccordionStatus] = useState({
        profile: true,
        experience: false,
        education: false,
    });

    function handleStatus(toChange) {
        const newStatus = !accordionStatus[toChange];
        setAccordionStatus({ ...accordionStatus, [toChange]: newStatus });
    }

    const [expInfo, setExpInfo] = useState(experience);

    const [inputPersonal, setInputPersonal] = useState(() => {
        const auxObj = {};
        basicInformation.forEach(
            (entry) =>
                (auxObj[entry.label] = placeholders.personal[entry.label]),
        );
        return auxObj;
    });

    // use of currying function!
    function handleChange(fieldname) {
        return function (event) {
            const auxValues = { ...inputPersonal };
            auxValues[fieldname] = event.currentTarget.value;
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
                    <Accordion
                        title={"Profile"}
                        status={accordionStatus.profile}
                        onClick={() => handleStatus("profile")}
                    >
                        {basicInformation.map((info) => (
                            <InputTextSimple
                                key={info.label}
                                type={info.type}
                                value={inputPersonal[info.label]}
                                onChange={handleChange(info.label)}
                                placeholder={placeholders.personal[info.label]}
                            />
                        ))}
                    </Accordion>
                    <Accordion
                        title={"Experience"}
                        status={accordionStatus.experience}
                        onClick={() => handleStatus("experience")}
                    >
                        <BlockExperience
                            name={"Experience"}
                            type={"career"}
                            expInfo={expInfo}
                            updateInfo={setExpInfo}
                            placeholder={placeholders.experience.career}
                        />
                    </Accordion>
                    <Accordion
                        title={"Education"}
                        status={accordionStatus.education}
                        onClick={() => handleStatus("education")}
                    >
                        <BlockExperience
                            name={"Education"}
                            type={"education"}
                            expInfo={expInfo}
                            updateInfo={setExpInfo}
                            placeholder={placeholders.experience.education}
                        />
                    </Accordion>
                </div>
                <div className="outputs">
                    <Preview
                        dataPersonal={inputPersonal}
                        dataExperience={{
                            types: ["career", "education"],
                            expInfo,
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
