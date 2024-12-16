import { nanoid } from "nanoid";

const experience = {
    career: {
        [nanoid()]: {
            institution: "Apple",
            title: "Analog Engineer",
            skills: `VCO-based ADC designs
MATLAB and SIMULINK modelling knowledge
Hands-on experience in laboratory`,
            dates: ["2019-12", "2024-09"],
        },
        // this is used to fill new entry forms
        // it is not used for display
        new: {
            institution: "",
            title: "",
            skills: "",
            dates: ["", ""],
        },
    },
    education: {
        [nanoid()]: {
            institution: "MIT",
            title: "PhD in Electrical Engineering",
            skills: `RF
Feedback
Project in 16nm in colaboration with Qualcomm`,
            dates: ["2013-09", "2018-09"],
        },
        // this is used to fill new entry forms
        // it is not used for display
        new: {
            institution: "",
            title: "",
            skills: "",
            dates: ["", ""],
        },
    },
};

const personalInfo = {
    location: "Seoul, South Korea",
    ["first-name"]: "Jon",
    ["last-name"]: "Doe",
    email: "10xengineer@swe.com",
    phone: "010-1234-5678",
    profession: "Engineer",
};

export { experience, personalInfo };
