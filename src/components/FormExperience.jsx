import { useState } from "react";
import "../styles/FormExperience.css";
import InputDate from "./InputDate";

export default function FormExperience({
    info,
    updateExperience,
    editing,
    onClickChangeEditing,
    handleGoBack,
    type,
    classValue,
    placeholder,
}) {
    const [infoState, setInfoState] = useState(info);

    function onChange(e) {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setInfoState({ ...infoState, [name]: value });
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

    return (
        <div className={`form ${className}`}>
            <div>
                <button type="button" onClick={handleGoBack}>
                    Go back Arrow
                </button>
            </div>
            <form onClick={onClickChangeEditing} onSubmit={updateExperience}>
                <label htmlFor="institution">Institution:</label>
                <input
                    type="text"
                    name="institution"
                    value={infoToSet.institution}
                    onChange={onChange}
                    onClick={onClick}
                    className={type}
                    placeholder={placeholder.institution}
                    required
                />
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="title"
                    value={infoToSet.title}
                    onChange={onChange}
                    onClick={onClick}
                    className={type}
                    placeholder={placeholder.title}
                    required
                />
                <label htmlFor="skills">Skills:</label>
                <textarea
                    rows="4"
                    cols="50"
                    name="skills"
                    style={{ whiteSpace: "pre-wrap" }}
                    value={infoToSet.skills}
                    onChange={onChange}
                    onClick={onClick}
                    className={type}
                    placeholder={placeholder.skills}
                    required
                />
                {infoToSet.dates.map((date, index) => {
                    return date !== "present" ? (
                        <InputDate
                            key={index}
                            name={index}
                            date={date}
                            className={`${type} date`}
                        />
                    ) : null;
                })}
                <button type="submit" onClick={onClickChangeEditing}>
                    Save
                </button>
            </form>
        </div>
    );
}
