import { Router } from 'express'
import { addUser } from '../controllers/user.js'

const router = Router()

router.post('/register', addUser)

export default router