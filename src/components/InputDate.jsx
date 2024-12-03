import { useState } from "react";

export default function InputDate({ date, className, name }) {
    const [value, setValue] = useState(date);

    function onChange(e) {
        const newValue = e.currentTarget.value;
        setValue(newValue);
    }

    return (
        <>
            <input
                type="month"
                className={className}
                value={value}
                onChange={onChange}
                name={name}
            />
        </>
    );
}
