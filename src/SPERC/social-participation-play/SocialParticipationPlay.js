import HeaderAndPrompt from "../header-prompt/header"
import ListItem from "../list-item/list-item"
function SocialParticipation () {

    const data = [
        "difficulty getting along with peers", 
        "prefers playing by self with objects or toys rather than with people", 
        "does not interact reciprocally with peers or adults; hard to have a 'meaningful' two - way conversation",
        "hurts self or others",
        "others have a hard time interpreting child's cues, needs, or emotions",
        "does not seek out connections with familiar people",
        "Happy to play on own",
        "able to come up with ideas for play.", 
        "plays repetitively",
        "Struggles to  share control when playing with others"
    ]
    const header = {
        title: "Social Participation and Play(L3)",
        techDescription: "Social participation and play are very complex.It demands comprehension of verbal and nonverbal cues and is relying on quick processing of information.Lack of information causes misunderstandings and can lead to inappropriate responses.Children learn through observation from the people around them how to behave.However, if they don’t process sufficient information from observation alone, these skills need to be specifically taught. According to information provided by XXXX’s parents and teachers"
    }

    return (
        <div className="Social-Participation-play-container">
           <HeaderAndPrompt title={header.title} techDescription={header.techDescription} />
            <section className="border" >
                <ol>{data.map((item) => {
                    return <ListItem key={item} data={item} />
                })}</ol>
            </section>
        </div>
    )
}

export default SocialParticipation;