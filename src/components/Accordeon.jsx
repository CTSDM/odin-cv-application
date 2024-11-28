import "../styles/Accordeon.css";

export default function Accordeon({ children, title, status, onClick }) {
    const statusClass = status ? "active" : "";
    const classes = `accordion ${statusClass}`;
    return (
        <div className={classes}>
            <div className="information" onClick={onClick}>
                {title}
            </div>
            <div
                className="panel"
                style={{ display: status ? "block" : "none" }}
            >
                {children.map((child, index) => {
                    return (
                        <div className="input" key={index}>
                            {child}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
