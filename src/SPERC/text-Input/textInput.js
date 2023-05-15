import { useState } from "react";

const TextInput = ({ formState, setFormState, description, id, title, label, type = "text", readOnly }) => {
    const [value, setValue] = useState({})

    const handleChange = (event) => {
        const value = event.target.value
        const response = {
            id: id,
            title: title,
            description: description,
            comment: value
        }
            setValue(response)
    }
    const addComment = () => {
        const foundObject = formState.find(obj => obj.id === id);
        if (Object.keys(value).length === 0) {
            return;
        } else if (!foundObject) {
            setFormState(formState => [...formState, value]);
        } else {
            const index = formState.findIndex(obj => obj.id === id);
            const newFormState = formState.map((obj, i) =>
                i === index ? {...obj, comment: value.comment } : obj
            );
            setFormState(newFormState);
        }
    };

    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input readOnly={readOnly} type={type} name={id} onChange={handleChange} />
            <button onClick={addComment}>add comment</button>
        </div>
    );
};

export default TextInput;