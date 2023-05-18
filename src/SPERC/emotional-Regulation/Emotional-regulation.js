import ListItem from "../list-item/list-item";
import HeaderAndPrompt from '../header-prompt/header'
function EmotionalRegulation (props) {
    const { formState, setFormState, responses, setResponses } = props
    const data = {
        title: "Emotional Regulation",
        standard: [
            { id: 36, description: "difficulty accepting changes in routine(to the point of tantrums)" },
            { id: 37, description: "gets easily frustrated" },
            { id: 38, description: "often impulsive" },
            { id: 39, description: "functions best in small group or individually" },
            { id: 40, description: "variable and quickly changing moods; prone to outbursts and tantrums" },
            { id: 41, description: "prefers to play on the outside, away from groups, or just be an observer" },
            { id: 42, description: "avoids eye contact" },
            { id: 43, description: "difficulty appropriately making needs known" }
        ]
    }
    
    const header = {
        title: "Emotional Regulation (L2)",
        techDescription: "We develop emotional regulation as we are developing the ability to regulate our arousal levels and develop resilience. According to information provided by XXXX’s parents and teachers"
    }

    return (
        <div className="Emotiona-regulation-container">
            <HeaderAndPrompt title={header.title} techDescription={header.techDescription} />
            <section className="border" >
                <ol>{data.standard.map((item) => {
                    return <ListItem key={item.description} responses={responses} setResponses={setResponses} formState={formState} setFormState={setFormState} title={"standard"} sectionTitle={data.title} id={item.id} description={item.description} />
                })}</ol>
            </section>
        </div>
    )
}

export default EmotionalRegulation;