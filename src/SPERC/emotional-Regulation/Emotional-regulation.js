import ListItem from "../list-item/list-item";
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
    return (
        <div className="Emotiona-regulation-container">
            <header className="component-prompt">
                <h3>Emotional Regulation (L2)</h3>
                <p className="tech-description">
                    We develop emotional regulation as we are developing the ability to regulate our arousal levels and develop resilience.
                    According to information provided by XXXX’s parents and teachers
                </p>
            </header>
            <section className="border" >
                <ol>{data.map((item) => {
                    return <ListItem key={item} data={item} />
                })}</ol>
            </section>
        </div>
    )
}

export default EmotionalRegulation;