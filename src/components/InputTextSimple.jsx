export default function InputTextSimple({
    name,
    label,
    type,
    value,
    onChange,
    placeholder,
}) {
    return (
        <>
            <label htmlFor={label}>{name}: </label>
            <input
                type={type}
                id={label}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    );
}
