import { useState } from "react";
import './style.css'
const TextInput = ({ formState, setFormState, description, id, title, sectionTitle }) => {
    const [value, setValue] = useState({})
    const [permission, setPermission] = useState(false)
    const handleChange = (event) => {
        const value = event.target.value
        const response = {
            id: id,
            sectionTitle: sectionTitle,
            title: title,
            description: description,
            comment: value
        }
            setValue(response)
    }
    const addComment = () => {
        const foundObject = formState.find(obj => obj.id === id && obj.title === title && obj.sectionTitle === sectionTitle);
        if (Object.keys(value).length === 0) {
            return;
        } else if (!foundObject) {
            setFormState(formState => [...formState, value]);
            setPermission(true)
        } else {
            const index = formState.findIndex(obj => obj.id === id && obj.title === title && obj.sectionTitle === sectionTitle);
            const newFormState = formState.map((obj, i) =>
                i === index ? {...obj, comment: value.comment } : obj
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