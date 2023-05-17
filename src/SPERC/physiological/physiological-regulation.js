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
            { id: 3, description: "Child feels clammy and cool" },
            { id: 4, description: "Child does not notice if they are hot or cold" },
            { id: 5, description: "Limp floppy body when held" },
            { id: 6, description: "Underreacts to pain" },
            { id: 7, description: "Extremely passive as an infant" }
        ],
        SNS: [
            { id: 8, description: "Often too hot" },
            { id: 9, description: "Sweats a lot" },
            { id: 10, description: "Heart rate too fast or stays too fast after fear/ exertion" },
            { id: 11, description: "Overreacts to pain" },
            { id: 12, description: "Difficult to settle as an infant" },
            { id: 13, description: "Tense when held" }
        ]
    }

    const foodAndDigestion = {
        title: "Food and Digestion",
        standard: [
            { id: 14, description: "prone to wetting /accidents/ soiling" },
            { id: 15, description: "difficulty with potty training; does not seem to know when he/she has to go (i.e., cannot feel the necessary sensation that bowel or bladder are full)" },
            { id: 16, description: "prone to Food allergies" },
            { id: 17, description: "prone to eczema" },
            { id: 18, description: "Shows distinct preference for sweet/ salty/ sour – citrus, spice, bitter/ smoke e.g. BBQ flavour" }
        ],
        PNS: [
            { id: 19, description: "Never Thirsty" },
            { id: 20, description: "Poor appetite" },
            { id: 21, description: "Prone to loose bowels/ Diarrhoea" },
            { id: 22, description: "Prone to burping/ flatulence/ vomiting" },
            { id: 23, description: "Digestive pain or discomfort" },
            { id: 24, description: "Sleeps all the time" },
            { id: 25, description: "Needs a lot of sleep to function" }
        ],
        SNS: [
            { id: 26, description: "Always Thirsty" },
            { id: 27, description: "Always hungry, doesn't know when full" },
            { id: 28, description: "Impulsive with food" },
            { id: 29, description: "Prone to constipation" },
            { id: 30, description: "Restless sleep pattern" },
            { id: 31, description: "Requires excessive help from caregiver to fall asleep; i.e., rubbing back or head, rocking, long walks, or car rides" }
        ]
    }

    const sleepAndSelfSoothing = {
        title: "Sleep/ self-soothing",
        standard: [
            { id: 32, description: "Tense when held as a baby" },
            { id: 33, description: "Fussy baby" },
            { id: 34, description: "Difficult to settle /very long bedtime routine" },
            { id: 35, description: "Can they self soothe? (use dummy/ cloth/ teddy/ cuddle)" }
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