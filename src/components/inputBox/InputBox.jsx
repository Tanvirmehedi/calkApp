import PropsTypes from 'prop-types';

const InputBox = ({ inputHandler, value, placeholder, name }) => {

    const inputStyle = {
        width: "100%",
        padding: ".2rem",
        margin: ".3rem auto",
        border: "1px solid gray",
        outline: 0,
        borderRadius: ".2rem",
        fontSize: "1rem",
    }

    return (
        <input style={inputStyle} type="number" placeholder={placeholder} onChange={inputHandler} name={name} value={value} />
    );
};
InputBox.PropsTypes = {
    inputHandler: PropsTypes.func.isRequired,
    value: PropsTypes.object.isRequired,
    placeholder: PropsTypes.string,
    name: PropsTypes.string
}

export default InputBox;