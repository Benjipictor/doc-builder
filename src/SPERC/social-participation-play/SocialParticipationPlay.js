import HeaderAndPrompt from "../header-prompt/header"
import ListItem from "../list-item/list-item"
function SocialParticipation (props) {
    const { formState, setFormState, responses, setResponses } = props
    const data = {
        title: "Social Participation",
        standard: [
            { id: 44, description: "difficulty getting along with peers" },
            { id: 45, description: "prefers playing by self with objects or toys rather than with people" },
            { id: 46, description: "does not interact reciprocally with peers or adults; hard to have a 'meaningful' two - way conversation" },
            { id: 47, description: "hurts self or others" },
            { id: 48, description: "others have a hard time interpreting child's cues, needs, or emotions" },
            { id: 49, description: "does not seek out connections with familiar people" },
            { id: 50, description: "Happy to play on own" },
            { id: 51, description: "able to come up with ideas for play." },
            { id: 52, description: "plays repetitively" },
            { id: 53, description: "Struggles to share control when playing with others" }
        ]
    }
    
    const header = {
        title: "Social Participation and Play(L3)",
        techDescription: "Social participation and play are very complex.It demands comprehension of verbal and nonverbal cues and is relying on quick processing of information.Lack of information causes misunderstandings and can lead to inappropriate responses.Children learn through observation from the people around them how to behave.However, if they don’t process sufficient information from observation alone, these skills need to be specifically taught. According to information provided by XXXX’s parents and teachers"
    }

    return (
        <div className="Social-Participation-play-container">
           <HeaderAndPrompt title={header.title} techDescription={header.techDescription} />
            <section className="border" >
                <ol>{data.standard.map((item) => {
                    return <ListItem key={item.description} responses={responses} setResponses={setResponses} formState={formState} setFormState={setFormState} title={"standard"} sectionTitle={data.title} id={item.id} description={item.description} />
                })}</ol>
            </section>
        </div>
    )
}

export default SocialParticipation;