import ButtonAdd from "./ButtonAdd";
import { useState } from "react";
import EntryCard from "./EntryCard";
import { nanoid } from "nanoid";
import FormExperience from "./FormExperience.jsx";
import experience from "../template/experience.js";

export default function BlockExperience({ name, type }) {
    const [entriesId, setEntries] = useState(Object.keys(experience[type]));
    const [expInfo, setExpInfo] = useState(experience);
    const [formTarget, setFormTarget] = useState(entriesId[0]);

    function addEntry() {
        const newId = nanoid();
        setEntries([...entriesId, newId]);
        // we should create a template for adding new data
        addExpInfo(type, { institution: "", title: "", skills: "" }, newId);
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
        setExpInfo({ ...expInfo, [type]: { ...expInfo[type], [id]: newInfo } });
    }

    function handleEditEntry(e) {
        const parentBox = e.currentTarget.parentNode.parentNode;
        setFormTarget(parentBox.id);
    }

    return (
        <div>
            <ButtonAdd name={`New ${name}`} onClick={addEntry} />
            {entriesId.map((entryId) => (
                <EntryCard
                    id={entryId}
                    key={entryId}
                    name={`New ${name}`}
                    handleDelete={deleteEntry}
                    handleEdit={handleEditEntry}
                />
            ))}
            <FormExperience info={expInfo[type][formTarget]} />
        </div>
    );
}
