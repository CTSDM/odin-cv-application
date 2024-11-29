export default function ButtonAdd({ name, onClick }) {
    return (
        <button type="button" onClick={onClick}>
            Add {name}
        </button>
    );
}
