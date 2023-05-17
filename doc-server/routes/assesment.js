import { Router } from 'express'
import {submitChecklistItems} from '../controllers/assesment.js'
const router = Router()

router.post('/checklist/:id/items', submitChecklistItems)

export default router