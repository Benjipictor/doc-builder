import ListItem from "../list-item/list-item"
import HeaderAndPrompt from '../header-prompt/header'
import './style.css'
function PhysiologicalRegulation() {
    const painAndTemp = {
        title: "Temperature /pain regulation",
        standard: ["may not be able to maintain body temperature effectively", "difficulty in extreme temperatures or going from one extreme to another", "strong preference for warmth or cold"],
        PNS: ["Child feels clammy and cool", "Child does not notice if they are hot or cold", "Limp floppy body when held", "Under reacts to pain", "Extremely passive as an infant"],
        SNS: ["Often too hot", "Sweats a lot", "Heart rate too fast or stays too fast after fear/ exertion", "Overreacts to pain", "Difficults to settle as an infant", "Tense when held"]
    }

    const foodAndDigestion = {
        title: "Food and Digestion",
        standard: ["prone to wetting /accidents/ soiling", "difficulty with potty training; does not seem to know when he/she has to go (i.e., cannot feel the necessary sensation that bowel or bladder are full)", "prone to Food allergies", "prone to eczema", "Shows distinct preference for sweet/ salty/ sour – citrus, spice, bitter/ smoke e.g. BBQ flavour"],
        PNS: ["Never Thirsty", "Poor appetite", "Prone to loose bowels/ Diarrhoea", "Prone to burping/ flatulence/ vomiting", "Digestive pain or discomfort", "Sleeps all the time", "Needs a lot of sleep to function"],
        SNS: ["Always Thirsty", "Always hungry, dosen't know when full", "impulsive with food", "Prone to constipation", "Restless sleep pattern", "Requires excessive help from caregiver to fall asleep; i.e., rubbing back or head, rocking, long walks, or car rides"]
    }

    const sleepAndSelfSoothing = {
        title: "Sleep/ self-soothing  ",
        standard: ["Tense when held as a baby", "Fussy baby", "Difficult to settle /very long bedtime routine", "Can they self soothe? (use dummy/ cloth/ teddy/ cuddle)"]
    }
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
                        return <ListItem key={item} data={item} />
                    })}</ol>

                    <section>
                        <div>
                            <h6>PNS</h6>
                            <ol>{painAndTemp.PNS.map((item) => {
                                return <ListItem key={item} data={item} />
                            })}</ol>
                        </div>
                        <div>
                            <h6>SNS</h6>
                            <ol>{painAndTemp.SNS.map((item) => {
                                return <ListItem key={item} data={item} />
                            })}</ol>
                        </div>
                    </section>
                </section>
                <section className="border">
                    <h5>{foodAndDigestion.title}</h5>
                    <ol>{foodAndDigestion.standard.map((item) => {
                        return <ListItem key={item} data={item} />
                    })}</ol>

                    <section>
                        <div>
                            <h6>PNS</h6>
                            <ol>{foodAndDigestion.PNS.map((item) => {
                                return <ListItem key={item} data={item} />
                            })}</ol>
                        </div>
                        <div>
                            <h6>SNS</h6>
                            <ol>{foodAndDigestion.SNS.map((item) => {
                                return <ListItem key={item} data={item} />
                            })}</ol>
                        </div>
                    </section>
                </section>
                <section className="border">
                    <h5>{sleepAndSelfSoothing.title}</h5>
                    <ol>{sleepAndSelfSoothing.standard.map((item) => {
                        return <ListItem key={item} data={item} />
                    })}</ol>
                </section>
            </div>

        </div>
    )
}

export default PhysiologicalRegulation