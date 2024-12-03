export default function InputDate({ date, className, name, onChange }) {
    return (
        <>
            <input
                type="month"
                className={className}
                onChange={onChange}
                value={date}
                name={name}
                required
            />
        </>
    );
}
