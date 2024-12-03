import ButtonAdd from "./ButtonAdd";
import { useState } from "react";
import EntryCard from "./EntryCard";
import { nanoid } from "nanoid";
import FormExperience from "./FormExperience.jsx";

export default function BlockExperience({
    name,
    type,
    expInfo,
    updateInfo,
    placeholder,
}) {
    const entriesWithoutEmptyEntry = Object.keys(expInfo[type]).slice(0, -1);
    const [entriesId, setEntries] = useState(entriesWithoutEmptyEntry);
    const [formTarget, setFormTarget] = useState(entriesId[0]);
    const [editingStatus, setEditingStatus] = useState(false);
    const [classStatus, setClassStatus] = useState(["", "hidden"]);
    const [dateState, setDateState] = useState([true, true]);

    function addEntry() {
        // need to change the formTarget
        // however, we don't change the editingStatus here but we do it using a fake click
        // since the logic is built in that way
        setFormTarget("new");
        setClassStatus([classStatus[1], classStatus[0]]);
        const forms = document.querySelectorAll("form");
        const form = type === "career" ? forms[0] : forms[1];
        inputClickAndFocus(form.children[1]);
        updateDateStatusFromInfo(expInfo[type]["new"], setDateState);
    }

    function deleteEntry(e) {
        const entriesModified = [...entriesId];
        const entryBlock = e.currentTarget.parentNode.parentNode;
        entriesModified.splice(entriesModified.indexOf(entryBlock.id), 1);
        setEntries(entriesModified);
    }

    function handleEditEntry(e) {
        const currentTarget = e.currentTarget.parentNode.parentNode.id;
        setFormTarget(currentTarget);
        setClassStatus([classStatus[1], classStatus[0]]);
        // we also put the focus on the first input
        const forms = document.querySelectorAll("form");
        const form = type === "career" ? forms[0] : forms[1];
        inputClickAndFocus(form.children[1]);
        updateDateStatusFromInfo(expInfo[type][currentTarget], setDateState);
    }

    function inputClickAndFocus(input) {
        setTimeout(() => {
            input.click();
            input.focus();
            setEditingStatus(true);
        }, 200);
    }

    function handleUpdateExp(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const formProps = Object.fromEntries(formData);
        let id = formTarget;
        if (formTarget === "new") {
            id = nanoid();
            setEntries([...entriesId, id]);
        }

        const dates = getDatesFromProps(formProps);
        updateDateStatusFromForm(formProps, setDateState);

        const newInfo = {
            ...formProps,
            dates: dates,
        };
        updateInfo({
            ...expInfo,
            [type]: { ...expInfo[type], [id]: newInfo },
        });
        setEditingStatus(false);
        setClassStatus([classStatus[1], classStatus[0]]);
    }

    function handleGoBack() {
        setEditingStatus(false);
        setClassStatus([classStatus[1], classStatus[0]]);
    }

    const classEntries = classStatus[0];

    return (
        <div>
            <div className={classEntries}>
                <ButtonAdd name={`New ${name}`} onClick={addEntry} />
                {entriesId.map((entryId) => (
                    <EntryCard
                        id={entryId}
                        key={entryId}
                        name={expInfo[type][entryId].institution}
                        handleDelete={deleteEntry}
                        handleEdit={handleEditEntry}
                    />
                ))}
            </div>
            <FormExperience
                info={expInfo[type][formTarget]}
                editing={editingStatus}
                type={type}
                handleGoBack={handleGoBack}
                updateExperience={handleUpdateExp}
                classValue={classStatus[1]}
                placeholder={placeholder}
                dateState={dateState}
                onCheckbox={setDateState}
            />
        </div>
    );
}

function getDatesFromProps(formProps) {
    // formProps is an Object
    // They keys 0 and 1 refer to the start and end date of the position/studies
    // If it is a current position, the key 0 is the only one defined
    if (formProps[1]) return [formProps[0], formProps[1]];
    else return [formProps[0], "present"];
}

function updateDateStatusFromForm(formProps, setDateState) {
    if (formProps[1]) setDateState([true, true]);
    else setDateState([true, false]);
}

function updateDateStatusFromInfo(info, setDateState) {
    if (info.dates[1] === "present") setDateState([true, false]);
    else setDateState([true, true]);
}
