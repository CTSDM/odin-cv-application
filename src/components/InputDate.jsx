export default function InputDate({ date: date, className, name, onChange }) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    return (
        <>
            <input
                type="month"
                className={className}
                onChange={onChange}
                value={date}
                name={name}
                min={"1950-01"}
                max={currentYear + "-" + currentMonth}
                required
            />
        </>
    );
}
