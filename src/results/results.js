import React, { useEffect, useState } from "react";
import ChecklistItem from "./item-with-comments/checklistItem";
import './style.css'

function Results () {
    const [checklist, setChecklist] = useState()
    const [checklistItems, setItems] = useState({physiologicalRegulation: [], emotionalRegulation: [], socialParticipation: [], survivalBehaviours: []})
    useEffect(() => {
      getChecklist()
    }, [])
    
    
    function sortItems () {
        const physiologicalRegulationItems = []
        const emotionalRegulationItems = []
        const socialParticipationItems = []
        const survivalBehavioursItems = []
        if (checklist && checklist.checklistItems){
            checklist.checklistItems.forEach((item) => {
                if (item.itemNumber <= 35) {
                    physiologicalRegulationItems.push(item)
                } else if (item.itemNumber <= 43) {
                    emotionalRegulationItems.push(item)
                } else if (item.itemNumber <= 53) {
                    socialParticipationItems.push(item)
                } else if (item.itemNumber <= 70) {
                    survivalBehavioursItems.push(item)
                }
            })
            setItems({
                physiologicalRegulation: physiologicalRegulationItems, 
                emotionalRegulation: emotionalRegulationItems, 
                socialParticipation: socialParticipationItems, 
                survivalBehaviours: survivalBehavioursItems
            })
        }
    }

    const getChecklist = () => {
        const id = 1
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        };
        fetch(`http://localhost:4000/assesment/checklist/${id}`, options)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.status);
                }
                return response.json()
            })
            .then((response) => {
                setChecklist(response.data)
                console.log("this is checklist", checklist)
                
            })
            .catch((error) => {
                console.log({ error: error })
            })
        
    }
    useEffect(() => {
        sortItems()
    }, [checklist]);

    return (
        <div>
            <button onClick={getChecklist}>press me</button>
            <section>
                <h3>Physiological Regulation</h3>
                {checklist ? (<ul className="list">{checklistItems.physiologicalRegulation.map((item) => {
                    return <ChecklistItem key={item.id} comments={checklist.comments} item={item} />
                })}</ul>) : (<p>Loading:</p>)}
            </section>
            <section>
                <h4>Survival Behaviours</h4>
                {checklist ? (<ul className="list">{checklistItems.survivalBehaviours.map((item) => {
                    return <ChecklistItem key={item.id} comments={checklist.comments} item={item} />
                })}</ul>) : (<p>Loading:</p>)}
            </section>
            <section>
                <h4>Emotional Regulation</h4>
                {checklist ? (<ul className="list">{checklistItems.emotionalRegulation.map((item) => {
                    return <ChecklistItem key={item.id} comments={checklist.comments} item={item} />
                })}</ul>) : (<p>Loading:</p>)}
            </section>
            <section>
                <h4>Social Participation / Play</h4>
                {checklist ? (<ul className="list">{checklistItems.socialParticipation.map((item) => {
                    return <ChecklistItem key={item.id} comments={checklist.comments} item={item} />
                })}</ul>) : (<p>Loading:</p>)}
            </section>
        </div>
    )
}

export default Results;