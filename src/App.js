import './App.css' 



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Draft document builder</h1>
      </header>
      <div className="Sperc-container">
        <header className="Section-header">
          <h2>Sensory Processing and Early Relationships</h2>
          <p>
            Information for this section was provided through questionnaires completed by Frankie’s parents and teachers.
            Answers have been colour coded, indicating who has highlighted this response:
          </p>
          <ul className="UL-noStyle">
            <li className="Blue-text">Parent</li>
            <li className="Orange-text">Teacher</li>
            <li className="Green-text">Parent and Teacher</li>
          </ul>
        </header>
        <div className="Physiological-Regulation-container">
          <header className="component-prompt">
            <h3>Physiological Regulation (L1)</h3>
            <p className="tech-description">
              Physiological Regulation is our body’s ability to remain relatively stable and constant. This is a foundation stone or base level for regulation. If we are unwell, tired, hungry or thirsty this will affect our emotional and sensory regulation. The ability to regulate our body functions develops in infancy and childhood. Eg: babies cannot regulate their temperature, don’t have established sleep/wake patterns, digestion and continence. If we are under a lot of emotional stress, our physiological regulation can be affected.  Factors such as ongoing family stress, learning difficulties or sensory processing difficulties can interrupt the body’s ability to develop physiological regulation.
              When our autonomic nervous system (ANS) is well balanced, our body adjusts to our needs. Our heartrate slows down when we need to sleep, our digestion increases when we eat, and slows down when we are asleep, our body temperature adjusts according to our physical exertion and environmental temperature.
            </p>
          </header>
          <section className="black-border">
            <article>
              <h5>Temperature /pain regulation</h5>
              <ol>
                <li>may not be able to maintain body temperature effectively</li>
                <li>difficulty in extreme temperatures or going from one extreme to another</li>
                <li>strong preference for warmth or cold</li>
              </ol>
            </article>
            <article>
              <h5>PNS (definition to add)</h5>
              <ol>
                <li>Child feels clammy and cool</li>
                <li>Child does not notice if they are hot or cold</li>
                <li>Limp floppy body when held</li>
                <li>Under reacts to pain</li>
                <li>Extremely passive as an infant</li>
              </ol>
            </article>
            <article>
              <h5>SNS (definition to add)</h5>
              <ol>
                <li>Often too hot</li>
                <li>Sweats a lot</li>
                <li>Heart rate too fast or stays too fast after fear/ exertion</li>
                <li>Overreacts to pain</li>
                <li>Difficults to settle as an infant</li>
                <li>Tense when held</li>
              </ol>
            </article>
            <article>
              <h5>Food and Digestion</h5>
              <ol>
                <li>prone to wetting /accidents/ soiling</li>
                <li>difficulty with potty training; does not seem to know when he/she has to go (i.e., cannot feel the necessary sensation that bowel or bladder are full)</li>
                <li>prone to Food allergies</li>
                <li>prone to eczema</li>
                <li>Shows distinct preference for sweet/ salty/ sour – citrus, spice, bitter/ smoke e.g. BBQ flavour</li>
              </ol>
            </article>
            <article>
              <h5>PNS</h5>
              <ol>
                <li>Never Thirsty</li>
                <li>Poor appetite</li>
                <li>Prone to loose bowels/ Diarrhoea</li>
                <li>Prone to burping/ flatulence/ vomiting</li>
                <li>Digestive pain or discomfort</li>
                <li>Sleeps all the time</li>
                <li>Needs a lot of sleep to function</li>
              </ol>
            </article>
            <article>
              <h5>SNS</h5>
              <ol>
                <li>Always Thirsty</li>
                <li>Always hungry, dosen't know when full</li>
                <li>impulsive with food</li>
                <li>Prone to constipation</li>
                <li>Restless sleep pattern</li>
                <li>Requires excessive help from caregiver to fall asleep; i.e., rubbing back or head, rocking, long walks, or car rides </li>
              </ol>
            </article>
            <article>
              <h5>Sleep/ self-soothing</h5>
              <ol>
                <li>Tense when held as a baby</li>
                <li>Fussy baby</li>
                <li>Difficult to settle /very long bedtime routine</li>
                <li>Can they self soothe? (use dummy/ cloth/ teddy/ cuddle)</li>
              </ol>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
