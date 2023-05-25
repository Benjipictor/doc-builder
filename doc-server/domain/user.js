import dbClient from '../utils/dbClient.js'

export const createUser = async (email, passwordHash, role, firstName, lastName) => {
    console.log("this is the data", passwordHash)
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


