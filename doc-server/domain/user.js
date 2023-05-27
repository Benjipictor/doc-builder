import dbClient from '../utils/dbClient.js'

export const createUser = async (email, passwordHash, role, firstName, lastName) => {
    const createdUser = await dbClient.user.create({
        data: {
            email,
            password: passwordHash,
            role,
            profile: {
                create: {
                    firstName,
                    lastName
                }
            }
        },
        include: {
            profile: true
        }
    })
    return createdUser
}

export const getUserByEmail = async (email) => {
    const user = await dbClient.user.findUnique({
        where: {
            email
        }
    })
    console.log("user", user)
    return user
}