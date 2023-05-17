import dbClient from '../utils/dbClient.js'

export const createItems = async (data) => {
    console.log("this is the array", data)
    const createdItems = await dbClient.checklistItem.createMany({
        data,
        skipDuplicates: true
    })
    return createdItems
}