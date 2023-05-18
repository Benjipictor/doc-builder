import { useState } from "react";
import RegisterInput from "./registerInput/registerInput";

function RegisterUser () {
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: ""
    })
    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        const newUserDetails = { ...userDetails }
        newUserDetails[name] = value
        console.log("this is the user details", newUserDetails)
        setUserDetails(newUserDetails)
    }

    const submitUserDetails = () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDetails),
        };
        fetch(`http://localhost:4000/user/register`, options)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.status);

                }
                return response.json()
            })
            .then((user) => {
                console.log(user)
            })
            .catch((error) => {
                console.log({ error: error })
            })
    }

    return (
        <div>
            <h2>Please register your details</h2>
            <RegisterInput label={"first name"} name={"firstName"} handleChange={handleChange} />
            <RegisterInput label={"last name"} name={"lastName"} handleChange={handleChange} />
            <RegisterInput label={"email"} name={"email"} handleChange={handleChange}/>
            <RegisterInput label={"password"} name={"password"} handleChange={handleChange} />
            <label htmlFor="role">Choose Role</label>
            <select name="role" id="role" handleChange={handleChange}>
                <option value={"Therapist"}>Therapist</option>
                <option value={"Parent/Carer"}>Parent / Carer</option>
                <option value={"Teacher"}>Teacher</option>
            </select>
            <button onClick={submitUserDetails}>Register</button>
        </div>
    )
}

export default RegisterUser;