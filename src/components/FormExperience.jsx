import { useState } from "react";
import "../styles/FormExperience.css";
import InputDate from "./InputDate";
import InputExperienceSimple from "./InputExperienceSimple";

export default function FormExperience({
    info,
    updateExperience,
    editing,
    handleGoBack,
    type,
    classValue,
    placeholder,
    dateState,
    onCheckbox,
}) {
    const [infoState, setInfoState] = useState(info);

    function onChange(e) {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        if (+name === 0 || +name === 1) {
            const newDates = infoState.dates;
            newDates[+name] = value;
            setInfoState({ ...infoState, dates: newDates });
        } else {
            setInfoState({ ...infoState, [name]: value });
        }
    }

    function handlerCheckbox(e) {
        let lastDate = "present";
        if (e.currentTarget.checked) onCheckbox([true, false]);
        else {
            onCheckbox([true, true]);
            lastDate = "";
        }
        setInfoState({
            ...infoState,
            dates: [infoState.dates[0], lastDate],
        });
    }

    function onClick() {
        const inputs = document.querySelectorAll(`input.${type}`);
        const textareaInput = document.querySelector(`textarea.${type}`);
        const inputDates = document.querySelectorAll(`input.${type}.date`);
        const dates = [...inputDates].map((input) => input.value);
        setInfoState({
            institution: inputs[0].value,
            title: inputs[1].value,
            skills: textareaInput.value,
            dates: dates,
        });
    }

    const infoToSet = editing ? infoState : info;
    const className = classValue;
    const presentRoleText =
        type === "career"
            ? "Currently working in this role"
            : "Currently working towards this degree";

    const inputRepetitive = ["institution", "title", "skills"];

    return (
        <div className={`form ${className}`}>
            <div>
                <button type="button" onClick={handleGoBack}>
                    Go back Arrow
                </button>
            </div>
            <form onSubmit={updateExperience}>
                {inputRepetitive.map((input) => {
                    return (
                        <div key={input}>
                            <InputExperienceSimple
                                value={infoToSet[input]}
                                name={input}
                                onChange={onChange}
                                onClick={onClick}
                                className={type}
                                placeholder={placeholder[input]}
                                type={type}
                            />
                        </div>
                    );
                })}
                {infoToSet.dates.map((date, index) => {
                    return date !== "present"
                        ? dateState[index] && (
                              <InputDate
                                  key={index}
                                  name={index}
                                  date={infoToSet.dates[index]}
                                  className={`${type} date`}
                                  onChange={onChange}
                              />
                          )
                        : null;
                })}
                <div>
                    <label htmlFor={`${type}-checkbox`}>
                        {presentRoleText}
                    </label>
                    <input
                        id={`${type}-checkbox`}
                        type="checkbox"
                        onChange={handlerCheckbox}
                        checked={!dateState[1]}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}
