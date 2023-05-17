import { sendDataResponse, sendMessageResponse } from '../utils/responses.js'
import { createItems, createComments, getAllChecklist } from '../domain/assesment.js'
export const submitChecklistItems = async (req, res) => {
    const arrayItems = req.body
    arrayItems.forEach(item => {
        if (!item.hasOwnProperty("itemNumber", "description", "checklistId", "response")) {
            return sendDataResponse(res, 404, {error: "Keys do not match the expected format", object: item})
        }
    });
    try {
        const createdItems = await createItems(req.body)
        return sendDataResponse(res, 200, createdItems)
    } catch (e) {
        
        sendDataResponse(res, 500, {error: e})
    }
}

export const submitChecklistComments = async (req, res) => {
    
    try {
        const comments = await createComments(req.body)
        return sendDataResponse(res, 200, comments)
    } catch (e) {
        sendDataResponse(res, 500, { error: e })
    }
}

export const getChecklist = async (req, res) => {
    const checklistId = Number(req.params.id)
    try {
        const checklist = await getAllChecklist(checklistId)
        return sendDataResponse(res, 200, checklist)
    } catch (e) {
        sendDataResponse(res, 500, { error: e })
    }
}
