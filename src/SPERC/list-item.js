import { useState } from 'react'
import './list-item.css'

const ListItem = (props) => {
    const {data} = props
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

    return (
        <li className="container">
            <p className={textColour}>{data}</p>
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
        </li>
    )
}

export default ListItem