import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', userRouter)

app.get('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        data: {
            resource: 'Not found'
        }
    })
})

export default app