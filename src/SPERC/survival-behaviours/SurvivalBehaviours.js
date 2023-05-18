import HeaderAndPrompt from "../header-prompt/header"
import ListItem from "../list-item/list-item"

function SurvivalBehaviours(props) {
    const { formState, setFormState, responses, setResponses } = props
    const data = {
        title: "Survival Behaviours",
        standard: [
            { id: 54, description: "Can’t relax and rest / calm" },
            { id: 55, description: "Is unable to focus and be at a Just right level for learning and playing" },
            { id: 56, description: "Clingy reluctant to separate" },
            { id: 57, description: "Finds it difficult to go to bed" },
            { id: 58, description: "Finds it difficult to go to sleep" },
            { id: 59, description: "Fearful, noisy, loud and demanding" },
            { id: 60, description: "Fidgety / Agitated / Constantly on the go / distractible / Acts Before Thinking" },
            { id: 61, description: "Focussing too much on an activity / busy all the time." },
            { id: 62, description: "Fights and will attack others verbally or physically (describe behaviors such as kicking, biting, hitting etc.)" },
            { id: 63, description: "Hurts self on purpose but hides it" },
            { id: 64, description: "Hurts self for attention in front of you" },
            { id: 65, description: "Always does what’s expected of them / compliant" },
            { id: 66, description: "Totally freezes in certain situations" },
            { id: 67, description: "Resistant Stubborn (e.g. quietly goes own way)" },
            { id: 68, description: "Resistant Defiant (e.g. digs heels in, cheeky and / or openly resists)" },
            { id: 69, description: "Daydreams, goes into a world of their own / burping / farting / yawning" },
            { id: 70, description: "Sleeping, fainting, collapse e.g. after outings or visits to therapy." }
        ]
    }
    
    const header = {
        title: "Survival behaviours / States of Arousal(L2)",
        techDescription: "People can tip into survival behaviours when feeling stressed in situations when others do not perceive the situation as threatening.These are largely unconscious patterns of behaviour that are triggered by sensory or emotional overload to keep us safe. According to information provided by XXXX’s parents and teachers"
    }
    return (
        <div className="Survival-behavours-container">
            <HeaderAndPrompt title={header.title} techDescription={header.techDescription} /> 
            <section className="border" >
                <ol>{data.standard.map((item) => {
                    return <ListItem key={item.description} responses={responses} setResponses={setResponses} formState={formState} setFormState={setFormState} title={"standard"} sectionTitle={data.title} id={item.id} description={item.description} />
                })}</ol>
            </section>
        </div>
    )
}

export default SurvivalBehaviours;