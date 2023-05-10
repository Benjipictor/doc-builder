import { sendDataResponse, sendMessageResponse } from '../utils/responses.js'

export const create = async (req, res) => {
    try {
        const createdCohort =- await createCohort(req.body)
    }
}