export default function PersonalInformation({ data }) {
    return (
        <div>
            <h3>Left-side</h3>
            {data.basicInformation.map((info, index) => {
                return (
                    <div key={info.name}>
                        {info.name}: {data.inputPersonal[index]}
                    </div>
                );
            })}
        </div>
    );
}
