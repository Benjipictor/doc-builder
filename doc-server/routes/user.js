import { Router } from 'express'
import { validateAuthentication, validateIdOrRole } from '../middleware/auth.js'

const router = Router()

router.post('/', create)

export default router