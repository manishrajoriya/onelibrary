import prisma from "./prisma"
import { PrismaClient } from "@prisma/client"

const Member = {
    id: 1  ,        
name    :"manish",     
address      :"kathmandu",
contactNumber:"8764296129",
email        :"gkraj@mail.com",
admissionDate:"2024-01-01",
expiryDate   :"2024-02-02",
status       :"live",
fees         :500,
// reminders    :"ertg",
// followUps    :
// attendance   
seatNumber   :3,
plan         :"dataa",
planId       :3,
createdAt    :"2024-01-01",

updatedAt    :"2024-02-02",
profileImage :"bgghjh"
}


export const CreatMember = async () => {
    try {
        const member = await prisma.member.create({data: {
            id: Member.id,
            name: Member.name,
            address: Member.address,
            contactNumber: Member.contactNumber,
            email: Member.email,
            admissionDate: Member.admissionDate,
            expiryDate: Member.expiryDate,
            // status: Member.status,
            // fees: Member.fees,
            seatNumber: Member.seatNumber,
            // plan: Member.plan,
            planId: Member.planId,
            createdAt: Member.createdAt,
            updatedAt: Member.updatedAt,
            profileImage: Member.profileImage
        }})
        console.log(member)
    } catch (error) {
        console.log(error);
        
    }
}
