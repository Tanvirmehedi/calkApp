import PropsTypes from "prop-types";
import shortid from "shortid";
import Button from "../ui/Button";
const OperationSection = ({ operationHandler, resetValue }) => {
    const operations = [
        {
            id: shortid.generate(),
            text: "+",
            onClick: () => operationHandler("+")
        },

        {
            id: shortid.generate(),
            text: "-",
            onClick: () => operationHandler("-")
        },
        {
            id: shortid.generate(),
            text: "*",
            onClick: () => operationHandler("*")
        },
        {
            id: shortid.generate(),
            text: "/",
            onClick: () => operationHandler("/")
        },
        {
            id: shortid.generate(),
            text: "%",
            onClick: () => operationHandler("%")
        },
        {
            id: shortid.generate(),
            text: "clear",
            onClick: resetValue
        }
    ]

    return (
        <div>
            <h3>Operations</h3>
            <div>
                {operations.map(operation => (
                    <Button key={operation.id} onClick={operation.onClick} text={operation.text} />
                ))}
            </div>
        </div>
    );
};

OperationSection.PropsTypes = {
    operationHandler: PropsTypes.func.isRequired, resetValue: PropsTypes.func.isRequired
}

export default OperationSection;