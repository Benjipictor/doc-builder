import { Router } from 'express'
import { submitChecklistItems, submitChecklistComments, getChecklist } from '../controllers/assesment.js'
const router = Router()

router.post('/checklist/:id/items', submitChecklistItems)
router.post('/checklist/:id/comments', submitChecklistComments)
router.get('/checklist/:id', getChecklist)
export default router