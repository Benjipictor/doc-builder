import HeaderAndPrompt from "../header-prompt/header"
import ListItem from "../list-item/list-item"

function SurvivalBehaviours() {
    const data = [
        "Can’t relax and rest / calm",
        "Is unable to focus and be at a Just right  level for learning and playing",
        "Is unable to focus and be at a Just right  level for learning and playing",
        "Clingy reluctant to separate",
        "Finds it difficult to go to bed",
        "Finds it difficult to go to sleep",
        "Fearful, noisy, loud  and demanding ",
        "Fidgety / Agitated / Constantly on the go / distractible / Acts Before Thinking",
        "Focussing too much on an activity / busy all the time.",
        "Fights and will attack others verbally or physically(describe behaviours such as kicking, biting, hitting etc.)",
        "Hurts self on purpose but hides it",
        "Hurts self for attention in front of you",
        "Always does what’s expected of them / compliant",
        "Totally freezes in certain situations",
        "Resistant Stubborn(e.g.quietly goes own way)",
        "Resistant Defiant(e.g.digs heels in, cheeky and / or openly resists)",
        "Daydreams, goes into world of their own / burping / farting / yawning",
        "Sleeping, fainting, collapse e.g.after outings, or visits to therapy."
    ]
    const header = {
        title: "Survival behaviours / States of Arousal(L2)",
        techDescription: "People can tip into survival behaviours when feeling stressed in situations when others do not perceive the situation as threatening.These are largely unconscious patterns of behaviour that are triggered by sensory or emotional overload to keep us safe. According to information provided by XXXX’s parents and teachers"
    }
    return (
        <div className="Survival-behavours-container">
            <HeaderAndPrompt title={header.title} techDescription={header.techDescription} /> 
            <section className="border" >
                <ol>{data.map((item) => {
                    return <ListItem key={item} data={item} />
                })}</ol>
            </section>
        </div>
    )
}

export default SurvivalBehaviours;