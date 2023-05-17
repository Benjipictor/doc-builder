import { sendDataResponse, sendMessageResponse } from '../utils/responses.js'
import { createItems } from '../domain/assesment.js'
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

