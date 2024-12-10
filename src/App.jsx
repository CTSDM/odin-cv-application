import "./styles/App.css";
import Accordion from "./components/Accordion.jsx";
import InputTextSimple from "./components/InputTextSimple.jsx";
import { useState, useRef } from "react";
import { basicInformation } from "./template/basicInfo.js";
import BlockExperience from "./components/BlockExperience.jsx";
import experience from "./template/experience.js";
import Preview from "./components/Preview.jsx";
import placeholders from "./template/placeholders.js";
import { useReactToPrint } from "react-to-print";
import personalInfo from "./template/personalInfo.js";

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

    const [inputPersonal, setInputPersonal] = useState(personalInfo);

    // use of currying function!
    function handleChange(fieldname) {
        return function (event) {
            const auxValues = { ...inputPersonal };
            auxValues[fieldname] = event.currentTarget.value;
            setInputPersonal(auxValues);
        };
    }

    const componentRef = useRef(null);
    const printFn = useReactToPrint({
        contentRef: componentRef,
        documentTitle: "AwesomeFileName",
    });

    return (
        <>
            <div className="title">
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
                <div className="preview-print-block">
                    <Preview
                        dataPersonal={inputPersonal}
                        dataExperience={{
                            types: ["career", "education"],
                            expInfo,
                        }}
                        ref={componentRef}
                    />
                    <div className="print-button">
                        <button type="button" onClick={printFn}>
                            Print!
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
