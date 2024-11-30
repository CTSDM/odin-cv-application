export default function Experience({ data }) {
    return (
        <div>
            <h3>Right-side data as plain text</h3>
            {data.types.map((type) => {
                const tempKeys = Object.entries(data.expInfo[type]);
                return (
                    <div key={type}>
                        {tempKeys.map((keysGeneral) => {
                            const keys = Object.keys(keysGeneral[1]);
                            return (
                                <div key={keysGeneral[0]}>
                                    {keys.map((key) => {
                                        return (
                                            <span key={key}>
                                                {key}:{" "}
                                                {
                                                    data.expInfo[type][
                                                        keysGeneral[0]
                                                    ][key]
                                                }
                                            </span>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
