import { sendDataResponse } from '../utils/responses.js'
import { createUser, getUserByEmail } from '../domain/user.js'
import {JWT_EXPIRY, JWT_SECRET} from '../utils/config.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

async function authenticateUser (password, passwordHash) {
    const isPasswordValid = await bcrypt.compare(password, passwordHash)
        if(!isPasswordValid) {
            return false
        }
        if(isPasswordValid) {
            console.log("password" ,isPasswordValid)
            return true
        }
}
function generateJwt(userId) {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRY })
}

export const addUser = async (req, res) => {
    const { firstName, lastName, email, role , password } = req.body
    const passwordHash = await bcrypt.hash(password, 6)
    try {

        const createdUser = await createUser(email, passwordHash, role, firstName, lastName)
        return sendDataResponse(res, 200, {user: createdUser})
    } catch (e) {
        sendDataResponse(res, 500, { error: e })
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        return sendDataResponse(res, 400, {
            error: 'Please provide an email and password'
        })
    }
    try {
        const user = await getUserByEmail(email)
        if (!user) {
            return sendDataResponse(res, 404, { error: "incorect password or email" })
        }
        const isAuthenticated = await authenticateUser(password, user.password)
        if (!isAuthenticated) {
            return sendDataResponse(res, 404, {error: "incorect email or password"})
        }
        const token = generateJwt(user.id)
        return sendDataResponse(res, 200, { token, ...user})
    } catch (e) {
        sendDataResponse(res, 500, { error: e })
    }
}