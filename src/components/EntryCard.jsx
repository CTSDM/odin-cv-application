export default function EntryCard({ id, name, handleDelete, handleEdit }) {
    return (
        <div id={id}>
            <div>{name}</div>
            <div>
                <button type="button" onClick={handleDelete}>
                    Delete
                </button>
                <button type="button" onClick={handleEdit}>
                    Edit
                </button>
            </div>
        </div>
    );
}
