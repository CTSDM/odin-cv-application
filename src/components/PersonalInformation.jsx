import "../styles/PersonalInformation.css";

export default function PersonalInformation({ data }) {
    return (
        <div>
            <div className="fullname">
                {data["first-name"]} {data["last-name"]}
            </div>
            <div className="profession">{data.profession}</div>
            <div className="personal-sub">
                <span>{data.location}</span>
                <span>{data.email}</span>
                <span>{data.phone}</span>
            </div>
        </div>
    );
}
