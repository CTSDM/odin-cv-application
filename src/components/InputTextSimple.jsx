import { useState } from "react";

export default function Input({ name, type }) {
    const [value, setValue] = useState("");

    function handleChange(event) {
        setValue(event.currentTarget.value);
    }

    return (
        <>
            <label htmlFor="firstName">{name}: </label>
            <input
                type={type}
                name="firstName"
                value={value}
                onChange={handleChange}
            />
        </>
    );
}
