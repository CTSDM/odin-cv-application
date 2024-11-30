import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience";

export default function Preview({ dataPersonal, dataExperience }) {
    return (
        <>
            <PersonalInformation data={dataPersonal} />
            <Experience data={dataExperience} />
        </>
    );
}
