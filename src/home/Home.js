import { Link } from "react-router-dom";
import RegisterUser from "../register/RegisterUser";
import Sperc from "../SPERC/Sperc";

function Home () {

    return (
        <div>
            <header>
                <h1>Doc-builder home page</h1>
            </header>
            <section>
                <Link to={RegisterUser}>Register</Link>
                <Link to={Sperc}>Go to Sperc</Link>
            </section>
        </div>
    )
}

export default Home;