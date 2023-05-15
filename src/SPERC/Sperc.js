import EmotionalRegulation from './emotional-Regulation/Emotional-regulation'
import { useState } from "react";
import PhysiologicalRegulation from './physiological/physiological-regulation'
import SocialParticipation from './social-participation-play/SocialParticipationPlay'
import './Sperc.css'
import SurvivalBehaviours from './survival-behaviours/SurvivalBehaviours'


function Sperc() {
    const [formState, setFormState] = useState([]);
    const [responses, setResponses] = useState([])
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
        </div>
    )
}

export default Sperc
