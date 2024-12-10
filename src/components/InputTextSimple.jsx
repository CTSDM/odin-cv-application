export default function InputTextSimple({
    type,
    value,
    onChange,
    placeholder,
}) {
    return (
        <>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={"input-info"}
            />
        </>
    );
}
