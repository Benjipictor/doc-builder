import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

async function seed() {
    try {
        const user1  = createUser("james@gmail.com", "Testtest2!", "admin")
        const u1Profile = createUserProfile("james", "doe", user1.id)
        const clientProfile = createClientProfile("Lenny", "dobs", "01/01/10", "male")
        const adress = createAdress("lotham", "lotham street")
    }
}

async function createUser(
    email,
    password,
    role,
) {
    const user = await prisma.user.create({
        data: {
            email,
            password: await bcrypt.hash(password, 8),
            role,
        },
    })
    console.log("user created: ", user)
}

async function createUserProfile(
    firstName,
    lastName,
    userId
) {
    const profile = await prisma.profile.create({
        data: {
            firstName,
            lastName,
            userId
        }
    })
    console.log("profile created: ", profile)
}

async function createClientProfile(
    firstName,
    lastName,
    dob,
    gender,
) {
    const client = await prisma.client.create({
        data: {
            firstName,
            lastName,
            dob,
            gender,
        }
    })
    console.log("client profile created: ", client)
}

async function createAdress(
    location,
    street,
    city,
    county,
    country,
    postalCode,
    clientId
) {
    const address = await prisma.address.create({
        data: {
            location,
            street,
            city,
            county,
            country,
            postalCode,
            clientId
        }
    })
    console.log("adress created: ", address)
}

async function createAssesment(
    clientId,
    assesorId
) {
    const assessment = await prisma.assessment.create({
        clientId,
        assesorId
    })
    console.log("Assesment created: ", assessment)
}

async function createChecklist(
    title,
    assessmentId
) {
    const checklist = await prisma.assessment.create({
        title,
        assessmentId
    })
    console.log("checklist created: ", checklist)
}

async function createChecklistItem(
    itemNumber,
    description,
    response,
    checklistId
) {
    const checklistItem = await prisma.checklistItem.create({
        itemNumber,
        description,
        response,
        checklistId
    })
    console.log("Check list item created: ", checklistItem)
}
