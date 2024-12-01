import ButtonAdd from "./ButtonAdd";
import { useState } from "react";
import EntryCard from "./EntryCard";
import { nanoid } from "nanoid";
import FormExperience from "./FormExperience.jsx";

export default function BlockExperience({ name, type, expInfo, updateInfo }) {
    const [entriesId, setEntries] = useState(Object.keys(expInfo[type]));
    const [formTarget, setFormTarget] = useState(entriesId[0]);
    const [editingStatus, setEditingStatus] = useState(false);
    const [classStatus, setClassStatus] = useState(["", "hidden"]);

    function addEntry() {
        const newId = nanoid();
        setEntries([...entriesId, newId]);
        // we should create a template for adding new data
        addExpInfo(type, { institution: "", title: "", skills: "" }, newId);
        // when creating a new entry it goes directly into editing that entry
        // so we need to change the formTarget and the editingStatus
        setFormTarget(newId);
        setClassStatus([classStatus[1], classStatus[0]]);
    }

    function deleteEntry(e) {
        const entriesModified = [...entriesId];
        const entryBlock = e.currentTarget.parentNode.parentNode;
        entriesModified.splice(entriesModified.indexOf(entryBlock.id), 1);
        setEntries(entriesModified);
    }

    function addExpInfo(type, info, id) {
        const newInfo = {
            institution: info.institution,
            title: info.title,
            skills: info.skills,
        };
        setEditingStatus(false);
        updateInfo({ ...expInfo, [type]: { ...expInfo[type], [id]: newInfo } });
    }

    function handleEditEntry(e) {
        const parentBox = e.currentTarget.parentNode.parentNode;
        setFormTarget(parentBox.id);
        setClassStatus([classStatus[1], classStatus[0]]);
    }

    function handleUpdateExp(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const formProps = Object.fromEntries(formData);
        updateInfo({
            ...expInfo,
            [type]: { ...expInfo[type], [formTarget]: formProps },
        });
        setEditingStatus(false);
        setClassStatus([classStatus[1], classStatus[0]]);
    }

    function handleGoBack() {
        setEditingStatus(true);
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
                onClickChangeEditing={() => setEditingStatus(true)}
                type={type}
                handleGoBack={handleGoBack}
                updateExperience={handleUpdateExp}
                classValue={classStatus[1]}
            />
        </div>
    );
}
