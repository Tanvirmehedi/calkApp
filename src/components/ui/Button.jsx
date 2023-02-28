import PropsTypes from "prop-types";

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>{text}</button>
    );
};

Button.PropsTypes = {
    onClick: PropsTypes.func.isRequired,
    text: PropsTypes.string.isRequired
}

export default Button;