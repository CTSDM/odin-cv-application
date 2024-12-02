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
                                            <>
                                                <span>{pair[1].title}</span>
                                                {", "}
                                                <span>
                                                    {pair[1].institution}
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <span>
                                                    {pair[1].institution}
                                                </span>
                                                {", "}
                                                <span>{pair[1].title}</span>
                                            </>
                                        )}
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
