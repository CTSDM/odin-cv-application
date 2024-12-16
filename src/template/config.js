import { nanoid } from "nanoid";

const experience = {
    career: {
        [nanoid()]: {
            institution: "Apple",
            title: "Senior Analog Engineer",
            skills: `Knowledge in ADCs for pressure sensors.
Several tape outs in 16nm CMOS.
Participation in system level design.
Several patents in ADC architectures.`,
            dates: ["2019-12", "2024-09"],
        },
        // this is used to fill new entry forms
        // it is not used for display
        [nanoid()]: {
            institution: "Qualcomm",
            title: "Analog Engineer",
            skills: `Transistor level simulation.
Hands-on experience in laboratory measurements.`,
            dates: ["2018-09", "2019-12"],
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
            skills: `Several projects in RF.
Supervised several undergrad students.
Project in 16nm in colaboration with Qualcomm.`,
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
