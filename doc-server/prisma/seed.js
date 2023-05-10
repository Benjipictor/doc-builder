import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

async function seed() {
        const user1  = await createUser("james@gmail.com", "Testtest2!", "admin")
        console.log("this is user created", user1)
        await createUserProfile("james", "doe", user1.id)
        const clientProfile = await createClientProfile("Lenny", "dobs", "01/01/10", "male", )
        await createAdress("lotham", "lotham street", "north town", "asquard", "uk", "ST13 TYN", clientProfile.id)
        const assessment = await createAssesment(clientProfile.id, user1.id)
        const checklist = await createChecklist("sperc", assessment.id)
        await createChecklistItem(1, "may not be able to maintain body temperature effectively", "parents", checklist.id) 
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
    return user
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
            userId,
        },
        include: {
            user: true
        }
    })
    console.log("profile created: ", profile)
    return profile
}

async function createClientProfile(
    firstName,
    lastName,
    dob,
    gender,
) {
    const client = await prisma.clientProfile.create({
        data: {
            firstName,
            lastName,
            dob,
            gender,
        }
    })
    console.log("client profile created: ", client)
    return client
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
        },
        include: {
            client: true
        }
    })
    console.log("adress created: ", address)
    return address
}

async function createAssesment(
    clientId,
    assesorId
) {
    const assessment = await prisma.assesment.create({
        data: {
            clientId,
            assesorId
        }, 
        include: {
            client: true,
            asessor: true,
            checklists: true
        }
    })
    console.log("Assesment created: ", assessment)
    return assessment
}

async function createChecklist(
    title,
    assesmentId
) {
    const checklist = await prisma.checklist.create({
        data: {
            title,
            assesmentId
        },
        include: {
            assesment: true
        }
    })
    console.log("checklist created: ", checklist)
    return checklist
}

async function createChecklistItem(
    itemNumber,
    description,
    response,
    checklistId
) {
    const checklistItem = await prisma.checklistItem.create({
       data: { 
        itemNumber,
        description,
        response,
        checklistId
        },
        include: {
           checklist: true 
        }
    })
    console.log("Check list item created: ", checklistItem)
    return checklistItem
}
seed().catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})