import { nanoid } from "nanoid";
import { Fragment } from "react";

export default function Experience({ data }) {
    return (
        <div>
            {data.types.map((type) => {
                const pairsExp = Object.entries(data.expInfo[type]);
                let skillBlock, keys;
                return (
                    <Fragment key={type}>
                        <div>
                            <span>{type[0].toUpperCase() + type.slice(1)}</span>
                            <div>-------------------------------------</div>
                        </div>
                        {pairsExp.map((pair) => {
                            if (pair[0] === "new") return null;
                            if (type === "career") {
                                skillBlock = pair[1].skills.split("\n");
                                keys = skillBlock.map(() => nanoid());
                            }
                            return (
                                <div
                                    key={`${type}-${pair[1].institution}-${pair[1].title}`}
                                >
                                    <div>
                                        {type === "career" ? (
                                            <div>
                                                {pair[1].title}
                                                {", "}
                                                {pair[1].institution}
                                            </div>
                                        ) : (
                                            <div>
                                                {pair[1].institution}
                                                {", "}
                                                {pair[1].title}
                                            </div>
                                        )}
                                        <div>
                                            {beautifyDate(pair[1].dates[0])}
                                            {" - "}
                                            {beautifyDate(pair[1].dates[1])}
                                        </div>
                                    </div>
                                    <ul>
                                        {skillBlock === undefined
                                            ? null
                                            : skillBlock.map((entry, index) => (
                                                  <li key={keys[index]}>
                                                      {entry}
                                                  </li>
                                              ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </Fragment>
                );
            })}
        </div>
    );
}

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
