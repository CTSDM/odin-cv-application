export default function InputExperienceSimple({
    value,
    onChange,
    onClick,
    type,
    placeholder,
    name,
}) {
    return name === "skills" ? (
        <textarea
            value={value}
            onChange={onChange}
            onClick={onClick}
            className={type}
            placeholder={placeholder}
            required
            name={name}
            rows="5"
            cols="5"
        />
    ) : (
        <input
            type="text"
            value={value}
            onChange={onChange}
            onClick={onClick}
            className={type}
            placeholder={placeholder}
            name={name}
            required
        />
    );
}
