import { useState } from 'react'
import './list-item.css'
import TextInput from '../text-Input/textInput'

const ListItem = (props) => {
    const {description, id, title, setFormState, formState} = props
    const [textColour, setTextColour] = useState("black")
    const toggleColourBlue = () => {
        setTextColour('blueText')
    }
    const toggleColourOrange = () => {
        setTextColour('orangeText')
    }
    const toggleColourGreen = () => {
        setTextColour('greenText')
    }
    const toggleColourBlack = () => {
        setTextColour('blackText')
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
                <TextInput formState={formState} setFormState={setFormState} description={description} id={id} title={title} label={"comment"} readOnly={false} />
            </section>

        </li>
    )
}

export default ListItem