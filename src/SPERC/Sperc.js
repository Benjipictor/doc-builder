import EmotionalRegulation from './emotional-Regulation/Emotional-regulation'
import { useState } from "react";
import PhysiologicalRegulation from './physiological/physiological-regulation'
import SocialParticipation from './social-participation-play/SocialParticipationPlay'
import './Sperc.css'
import SurvivalBehaviours from './survival-behaviours/SurvivalBehaviours'
import Results from '../results/results';


function Sperc() {
    const [formState, setFormState] = useState([]);
    const [responses, setResponses] = useState([])
        
    const postComments = () => {
        const id = 1
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        };
        fetch(`http://localhost:4000/assesment/checklist/${id}/comments`, options)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.status);

                }
                return response.json()
            })
            .then((postedComments) => {
                console.log(postedComments)
            })
            .catch((error) => {
                console.log({ error: error })
            })
    }

    const postResponses = () => {
        const id = 1
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

    const submit = () => {
        postComments()
        postResponses()
        return
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
            <SurvivalBehaviours responses={responses} setResponses={setResponses} formState={formState} setFormState={setFormState} />
            <EmotionalRegulation responses={responses} setResponses={setResponses} formState={formState} setFormState={setFormState} />
            <SocialParticipation responses={responses} setResponses={setResponses} formState={formState} setFormState={setFormState} />
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default Sperc;
