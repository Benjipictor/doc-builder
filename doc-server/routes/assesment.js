import { Router } from 'express'
import { submitChecklistItems, submitChecklistComments } from '../controllers/assesment.js'
const router = Router()

router.post('/checklist/:id/items', submitChecklistItems)
router.post('/checklist/:id/comments', submitChecklistComments)
export default router