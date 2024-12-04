import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience";
import { forwardRef } from "react";

const Preview = forwardRef((props, ref) => {
    return (
        <div className="outputs" ref={ref}>
            <PersonalInformation data={props.dataPersonal} />
            <Experience data={props.dataExperience} />
        </div>
    );
});

Preview.displayName = "Preview";

export default Preview;
