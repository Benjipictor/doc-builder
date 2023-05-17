import { sendDataResponse, sendMessageResponse } from '../utils/responses.js'
import { Prisma } from '@prisma/client'
import { createItems } from '../domain/assesment.js'
export const submitChecklistItems = async (req, res) => {
    
    try {
        const createdItems = await createItems(req.body)
        return sendDataResponse(res, 200, createdItems)
    } catch (e) {
        console.log(e)
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            console.log(e)

        }
        sendDataResponse(res, 500, {error: e})
    }
}

