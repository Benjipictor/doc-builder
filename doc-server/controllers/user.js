import { sendDataResponse } from '../utils/responses.js'
import { createUser } from '../domain/user.js'
import bcrypt from 'bcrypt'
export const addUser = async (req, res) => {
    const { firstName, lastName, email, role , password } = req.body
    const passwordHash = await bcrypt.hash(password, 6)
    console.log("this is the req", req.body)

    try {

        const createdUser = await createUser(email, passwordHash, role, firstName, lastName)
        return sendDataResponse(res, 200, createdUser)
    } catch (e) {
        sendDataResponse(res, 500, { error: e })
    }
}