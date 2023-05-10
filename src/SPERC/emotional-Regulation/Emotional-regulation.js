import ListItem from "../list-item/list-item";
import HeaderAndPrompt from '../header-prompt/header'
function EmotionalRegulation () {
    const data = [
        "difficulty accepting changes in routine(to the point of tantrums)",
        "gets easily frustrated",
        "often impulsive", 
        "functions best in small group or individually",
        "variable and quickly changing moods; prone to outbursts and tantrums",
        "prefers to play on the outside, away from groups, or just be an observer",
        "avoids eye contact",
        "difficulty appropriately making needs known"
    ]
    const header = {
        title: "Emotional Regulation (L2)",
        techDescription: "We develop emotional regulation as we are developing the ability to regulate our arousal levels and develop resilience. According to information provided by XXXX’s parents and teachers"
    }
    return (
        <div className="Emotiona-regulation-container">
            <HeaderAndPrompt title={header.title} techDescription={header.techDescription} />
            <section className="border" >
                <ol>{data.map((item) => {
                    return <ListItem key={item} data={item} />
                })}</ol>
            </section>
        </div>
    )
}

export default EmotionalRegulation;