import PropsTypes from "prop-types";

const HistorySection = ({ history }) => {
    const styleGrid = {
        display: "flex",
        flexDirection: "column",
        gap: ".2rem"
    }
    const listStyle = {
        border: "1px solid gray",
        padding: ".3rem",
        margin: ".3rem 0",
        borderRadius: ".3rem",
        textAlign: "center"
    }
    const timeStyle = {
        display: "flex",
        flexDirection: "column",
        gap: ".3rem",
        paddingTop: "2px",
        color: "greenyellow"
    }

    return (
        <div style={styleGrid}>
            <div style={listStyle}>
                <div style={{ fontSize: "1rem", fontWeight: 600, color: "InactiveBorder" }}>
                    <span> Operation: </span>
                    {history.input.a}
                    {history.operator}
                    {history.input.b}
                    <span style={{ padding: "2px" }}> = </span>
                    {history.result}
                </div>
                <div style={timeStyle}>
                    <span>
                        Time: {history.time.toLocaleTimeString()}
                    </span>
                    <span>
                        Date: {history.time.toLocaleDateString()}
                    </span>
                </div>
            </div>
        </div>
    );
};
HistorySection.PropsTypes = {
    history: PropsTypes.object.isRequired
}
export default HistorySection;