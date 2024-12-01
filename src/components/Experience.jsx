export default function Experience({ data }) {
    return (
        <div>
            <h3>Right-side data as plain text</h3>
            {data.types.map((type) => {
                const pairsExp = Object.entries(data.expInfo[type]);
                return (
                    <div key={type}>
                        {pairsExp.map((pair) => {
                            const labels = Object.keys(pair[1]);
                            return labels.map((label, index) => {
                                return (
                                    <span key={index}>
                                        {label}: {pair[1][label]}
                                    </span>
                                );
                            });
                        })}
                    </div>
                );
            })}
        </div>
    );
}
