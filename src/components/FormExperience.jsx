import { useState } from "react";

export default function FormExperience({
    info,
    updateExperience,
    editing,
    onClickChangeEditing,
    handleGoBack,
    type,
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
        setInfoState({
            institution: inputs[0].value,
            title: inputs[1].value,
            skills: textareaInput.value,
        });
    }

    const infoToSet = editing ? infoState : info;

    return (
        <div>
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
                />
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="title"
                    value={infoToSet.title}
                    onChange={onChange}
                    onClick={onClick}
                    className={type}
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
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}
