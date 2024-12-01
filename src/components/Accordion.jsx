import "../styles/Accordion.css";

export default function Accordion({ children, title, status, onClick }) {
    const statusClass = status ? "active" : "";
    const classes = `accordion ${statusClass}`;
    let component;
    if (Array.isArray(children)) {
        component = children.map((child, index) => {
            return (
                <div className="input" key={index}>
                    {child}
                </div>
            );
        });
    } else component = children;
    return (
        <div className={classes}>
            <button type="button" className="information" onClick={onClick}>
                {title}
            </button>
            <div
                className="panel"
                style={{ display: status ? "block" : "none" }}
            >
                {component}
            </div>
        </div>
    );
}
