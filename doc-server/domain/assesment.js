import dbClient from '../utils/dbClient.js'

export const createItems = async (data) => {
    console.log("this is the array", data)
    const createdItems = await dbClient.checklistItem.createMany({
        data,
        skipDuplicates: true
    })
    return createdItems
}

export const createComments = async (data) => {
    console.log("this is the comments array", data)
    const createdComments = await dbClient.commentsOnChecklistItem.createMany({
        data,
        skipDuplicates: true
    })
    return createdComments
}

export const getAllChecklist = async (checklistId) => {
    const checklist = await dbClient.checklist.findUnique({
        where: {
            id: checklistId
        },
        include: {
            comments: true,
            checklistItems: true
        }
    })
    return checklist
}