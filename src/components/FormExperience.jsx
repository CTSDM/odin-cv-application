export default function FormExperience({ info, updateTitle }) {
    return (
        <div>
            <form>
                <label htmlFor="institution">Institution:</label>
                <input
                    type="text"
                    name="institution"
                    value={info.institution}
                />
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" value={info.title} />
                <label htmlFor="skills">Skills:</label>
                <textarea
                    rows="4"
                    cols="50"
                    style={{ whiteSpace: "pre-wrap" }}
                    value={info.skills}
                />
                <button type="button" onClick={updateTitle}>
                    Update
                </button>
            </form>
        </div>
    );
}
