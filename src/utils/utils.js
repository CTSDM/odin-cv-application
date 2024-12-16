function beautifyDate(dateString) {
    if (dateString === "present") return "Present";
    const monthsList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const dateArr = dateString.split("-");
    return `${monthsList[+dateArr[1] - 1]} ${dateArr[0]}`;
}

export { beautifyDate };
