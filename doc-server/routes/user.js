import { Router } from 'express'
import { addUser, login } from '../controllers/user.js'

const router = Router()

router.post('/register', addUser)
router.get('/login', login)
export default router