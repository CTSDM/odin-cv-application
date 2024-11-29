import { nanoid } from "nanoid";

const experience = {
    career: {
        [nanoid()]: {
            institution: "Apple",
            title: "Analog Engineer",
            skills: `VCO-based ADC designs
MATLAB and SIMULINK modelling knowledge
Hands-on experience in laboratory`,
        },
    },
    education: {
        [nanoid()]: {
            institution: "MIT",
            title: "PhD in Electrical Engineering",
            skills: `RF
Feedback
Project in 16nm in colaboration with Qualcomm`,
        },
    },
};

export default experience;
