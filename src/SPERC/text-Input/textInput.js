import { useState } from "react";
import './style.css'
const TextInput = ({ formState, setFormState, id }) => {
    const [value, setValue] = useState({})
    const [permission, setPermission] = useState(false)
    const handleChange = (event) => {
        const value = event.target.value
        const response = {
            itemId: id,
            userId: 1,
            comments: value,
            checklistId: 1
        }
            setValue(response)
    }
    const addComment = () => {
        const foundObject = formState.find(obj => obj.id === id);
        if (Object.keys(value).length === 0) {
            return;
        } else if (!foundObject) {
            setFormState(formState => [...formState, value]);
            setPermission(true)
        } else {
            const index = formState.findIndex(obj => obj.id === id);
            const newFormState = formState.map((obj, i) =>
                i === index ? {...obj, comments: value.comments } : obj
            );
            setFormState(newFormState);
            setPermission(true)
        }
        console.log("form state: ", formState)
    };

    const toggleReadOnly = () => {
        setPermission(false)
    }
    
    return (
        <div className="input-container">
            <textarea placeholder="Please add your comments here" className="input" readOnly={permission} name={id} onChange={handleChange} />
            <button className="button" onClick={addComment}>add comment</button>
            <button className="button" onClick={toggleReadOnly}>edit comment</button>
        </div>
    );
};

export default TextInput;