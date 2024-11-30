export default function Input({ name, type, value, onChange }) {
    return (
        <>
            <label htmlFor="firstName">{name}: </label>
            <input
                type={type}
                name="firstName"
                value={value}
                onChange={onChange}
            />
        </>
    );
}
