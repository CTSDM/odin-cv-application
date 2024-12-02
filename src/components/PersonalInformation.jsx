import "../styles/PersonalInformation.css";

export default function PersonalInformation({ data }) {
    return (
        <div>
            <div>
                <span>
                    {data["first-name"]} {data["last-name"]}
                </span>
            </div>
            <div>
                <span>{data.profession}</span>
            </div>
            <div className="personal-sub">
                <span>{data.location}</span>
                <span>{data.email}</span>
                <span>{data.phone}</span>
            </div>
        </div>
    );
}
