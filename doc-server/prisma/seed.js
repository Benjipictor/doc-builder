import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

async function seed() {

}

async function createUser(
    email,
    password,
    role,
    firstName,
    lastName,
) {
    const user = await prisma.user.create({
        data: {
            email,
            password: await bcrypt.hash(password, 8),
            role,
            profile: {
                create: {
                    firstName,
                    lastName
                }
            }
        },
        include: {
            profile: true
        }
    })
}

