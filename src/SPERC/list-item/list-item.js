import { useState } from 'react'
import './list-item.css'
import TextInput from '../text-Input/textInput'

const ListItem = (props) => {
    const {description, id, title, setFormState, formState, sectionTitle, responses, setResponses} = props
    const [textColour, setTextColour] = useState("black")
    const toggleColourBlue = () => {
        setTextColour('blueText')
        let response = 'Parent'
        addResponse(response)
    }
    const toggleColourOrange = () => {
        setTextColour('orangeText')
        let response = 'Teacher'
        addResponse(response)
    }
    const toggleColourGreen = () => {
        setTextColour('greenText')
        let response = 'Both'
        addResponse(response)
    }
    const toggleColourBlack = () => {
        setTextColour('blackText')
        let response = null
        addResponse(response)
    }

    const addResponse = (response) => {
        const foundObject = responses.find(obj => obj.itemNumber === id && obj.title === title && obj.sectionTitle === sectionTitle);
        const responseObj = {
            itemNumber: id,
            description: description,
            response: response,
            checklistId: 1,
        }
        if (!foundObject) {
            setResponses(responses => [...responses, responseObj]);
        } else {
            const index = responses.findIndex(obj => obj.id === id && obj.title === title && obj.sectionTitle === sectionTitle);
            const newFormState = responses.map((obj, i) =>
                i === index ? { ...obj, response: response } : obj
            );
            setFormState(newFormState);
        }
        console.log(responses)
    }

    return (
        <li >
            <section className="topContainer">
                <p className={textColour}>{description}</p>
                <div>
                    <h6>Parent</h6>
                    <svg width="30" height="30" >
                        <rect x="10" y="10" width="25" height="25" fill="blue" onClick={toggleColourBlue} />
                    </svg>
                </div>
                <div>
                    <h6>Teacher</h6>
                    <svg width="30" height="30" onClick={toggleColourOrange}>
                        <rect x="10" y="10" width="25" height="25" fill="orange" />
                    </svg>
                </div>
                <div>
                    <h6>Parent and Teacher</h6>
                    <svg width="30" height="30" onClick={toggleColourGreen}>
                        <rect x="10" y="10" width="25" height="25" fill="green" />
                    </svg>
                </div>
                <div>
                    <h6>remove</h6>
                    <svg width="30" height="30" onClick={toggleColourBlack}>
                        <rect x="10" y="10" width="25" height="25" fill="black" />
                    </svg>
                </div>
            </section>
            <section className='bottomContainer'>
                <TextInput formState={formState} setFormState={setFormState} sectionTitle={sectionTitle} description={description} id={id} title={title} label={"comments"} readOnly={false} />
            </section>
        </li>
    )
}

export default ListItem