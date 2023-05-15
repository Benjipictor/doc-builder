import ListItem from "../list-item/list-item"
import HeaderAndPrompt from '../header-prompt/header'
import './style.css'
function PhysiologicalRegulation(props) {
    const {formState, setFormState, responses, setResponses} = props
    const painAndTemp = {
        title: "Temperature /pain regulation",
        standard: [
            { id: 0, description: "may not be able to maintain body temperature effectively" },
            { id: 1, description: "difficulty in extreme temperatures or going from one extreme to another" },
            { id: 2, description: "strong preference for warmth or cold" }
        ],
        PNS: [
            { id: 0, description: "Child feels clammy and cool" },
            { id: 1, description: "Child does not notice if they are hot or cold" },
            { id: 2, description: "Limp floppy body when held" },
            { id: 3, description: "Underreacts to pain" },
            { id: 4, description: "Extremely passive as an infant" }
        ],
        SNS: [
            { id: 0, description: "Often too hot" },
            { id: 1, description: "Sweats a lot" },
            { id: 2, description: "Heart rate too fast or stays too fast after fear/ exertion" },
            { id: 3, description: "Overreacts to pain" },
            { id: 4, description: "Difficult to settle as an infant" },
            { id: 5, description: "Tense when held" }
        ]
    }

    const foodAndDigestion = {
        title: "Food and Digestion",
        standard: [
            { id: 0, description: "prone to wetting /accidents/ soiling" },
            { id: 1, description: "difficulty with potty training; does not seem to know when he/she has to go (i.e., cannot feel the necessary sensation that bowel or bladder are full)" },
            { id: 2, description: "prone to Food allergies" },
            { id: 3, description: "prone to eczema" },
            { id: 4, description: "Shows distinct preference for sweet/ salty/ sour – citrus, spice, bitter/ smoke e.g. BBQ flavour" }
        ],
        PNS: [
            { id: 0, description: "Never Thirsty" },
            { id: 1, description: "Poor appetite" },
            { id: 2, description: "Prone to loose bowels/ Diarrhoea" },
            { id: 3, description: "Prone to burping/ flatulence/ vomiting" },
            { id: 4, description: "Digestive pain or discomfort" },
            { id: 5, description: "Sleeps all the time" },
            { id: 6, description: "Needs a lot of sleep to function" }
        ],
        SNS: [
            { id: 0, description: "Always Thirsty" },
            { id: 1, description: "Always hungry, doesn't know when full" },
            { id: 2, description: "Impulsive with food" },
            { id: 3, description: "Prone to constipation" },
            { id: 4, description: "Restless sleep pattern" },
            { id: 5, description: "Requires excessive help from caregiver to fall asleep; i.e., rubbing back or head, rocking, long walks, or car rides" }
        ]
    }

    const sleepAndSelfSoothing = {
        title: "Sleep/ self-soothing",
        standard: [
            { id: 0, description: "Tense when held as a baby" },
            { id: 1, description: "Fussy baby" },
            { id: 2, description: "Difficult to settle /very long bedtime routine" },
            { id: 3, description: "Can they self soothe? (use dummy/ cloth/ teddy/ cuddle)" }
        ]
    };
    const header = { 
        title: "Physiological Regulation (L1)",
        techDescription: "Physiological Regulation is our body’s ability to remain relatively stable and constant.This is a foundation stone or base level for regulation.If we are unwell, tired, hungry or thirsty this will affect our emotional and sensory regulation.The ability to regulate our body functions develops in infancy and childhood.Eg: babies cannot regulate their temperature, don’t have established sleep/ wake patterns, digestion and continence.If we are under a lot of emotional stress, our physiological regulation can be affected.Factors such as ongoing family stress, learning difficulties or sensory processing difficulties can interrupt the body’s ability to develop physiological regulation.                    When our autonomic nervous system(ANS) is well balanced, our body adjusts to our needs.Our heartrate slows down when we need to sleep, our digestion increases when we eat, and slows down when we are asleep, our body temperature adjusts according to our physical exertion and environmental temperature."
    }

    return (
        <div className="Physiological-Regulation-container">
            <HeaderAndPrompt title={header.title} techDescription={header.techDescription} />
            <div>
                <section className="border">
                    <h5>{painAndTemp.title}</h5>
                    <ol>{painAndTemp.standard.map((item) => {
                        return <ListItem key={item.description} responses={responses} setResponses={setResponses} formState={formState} setFormState={setFormState} title={"standard"} sectionTitle={painAndTemp.title} id={item.id} description={item.description} />
                    })}</ol>
                    <section>
                        <div>
                            <h6>PNS</h6>
                            <ol>{painAndTemp.PNS.map((item) => {
                                return <ListItem key={item.description} responses={responses} setResponses={setResponses} formState={formState} setFormState={setFormState} title={"PNS"} sectionTitle={painAndTemp.title} id={item.id} description={item.description} />
                            })}</ol>
                        </div>
                        <div>
                            <h6>SNS</h6>
                            <ol>{painAndTemp.SNS.map((item) => {
                                return <ListItem key={item.description} responses={responses} setResponses={setResponses} formState={formState} setFormState={setFormState} title={"SNS"} sectionTitle={painAndTemp.title} id={item.id} description={item.description} />
                            })}</ol>
                        </div>
                    </section>
                </section>
                <section className="border">
                    <h5>{foodAndDigestion.title}</h5>
                    <ol>{foodAndDigestion.standard.map((item) => {
                        return <ListItem key={item.description} responses={responses} setResponses={setResponses} formState={formState} setFormState={setFormState} title={"standard"} sectionTitle={foodAndDigestion.title} id={item.id} description={item.description} />
                    })}</ol>

                    <section>
                        <div>
                            <h6>PNS</h6>
                            <ol>{foodAndDigestion.PNS.map((item) => {
                                return <ListItem key={item.description} responses={responses} setResponses={setResponses} formState={formState} setFormState={setFormState} title={"PNS"} sectionTitle={foodAndDigestion.title} id={item.id} description={item.description} />
                            })}</ol>
                        </div>
                        <div>
                            <h6>SNS</h6>
                            <ol>{foodAndDigestion.SNS.map((item) => {
                                return <ListItem key={item.description} responses={responses} setResponses={setResponses} formState={formState} setFormState={setFormState} title={"SNS"} sectionTitle={foodAndDigestion.title} id={item.id} description={item.description} />
                            })}</ol>
                        </div>
                    </section>
                </section>
                <section className="border">
                    <h5>{sleepAndSelfSoothing.title}</h5>
                    <ol>{sleepAndSelfSoothing.standard.map((item) => {
                        return <ListItem key={item.description} responses={responses} setResponses={setResponses} formState={formState} setFormState={setFormState} title={"standard"} sectionTitle={sleepAndSelfSoothing.title} id={item.id} description={item.description} />
                    })}</ol>
                </section>
            </div>

        </div>
    )
}

export default PhysiologicalRegulation