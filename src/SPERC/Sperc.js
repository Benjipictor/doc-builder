import EmotionalRegulation from './emotional-Regulation/Emotional-regulation'
import { useState } from "react";
import PhysiologicalRegulation from './physiological/physiological-regulation'
import SocialParticipation from './social-participation-play/SocialParticipationPlay'
import './Sperc.css'
import SurvivalBehaviours from './survival-behaviours/SurvivalBehaviours'


function Sperc() {
    const [formState, setFormState] = useState([]);
    const [responses, setResponses] = useState([])
    const showMeTheMoney = () => {
        const json = JSON.stringify(responses)
       return console.log("this is responses", json)
    }

    const postResponses = () => {
        const id = 1
        console.log("this is the response", responses)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(responses),
        };
        fetch(`http://localhost:4000/assesment/checklist/${id}/items`, options)
            .then((response) => {
                if(!response.ok) {
                    throw Error(response.status);

                }
                return response.json()
            })
            .then((postedItems) => {
                console.log(postedItems)
            })
            .catch((error) => {
                console.log({error: error})
            })
    }

    return (
        <div className='Sperc-container'>
            <header className="Section-header">
                <h2>Sensory Processing and Early Relationships</h2>
                <p>
                    Information for this section was provided through questionnaires completed by Frankie's parents and teachers.
                    Answers have been colour coded, indicating who has highlighted this response:
                </p>
                <ul className="UL-noStyle">
                    <li className="Blue-text">Parent</li>
                    <li className="Orange-text">Teacher</li>
                    <li className="Green-text">Parent and Teacher</li>
                </ul>
            </header>
            <PhysiologicalRegulation responses={responses} setResponses={setResponses} formState={formState} setFormState={setFormState}  />
            <SurvivalBehaviours />
            <EmotionalRegulation />
            <SocialParticipation />
            <button onClick={postResponses}>Submit</button>
            <button onClick={showMeTheMoney}>Show me the money</button>
        </div>
    )
}

export default Sperc
