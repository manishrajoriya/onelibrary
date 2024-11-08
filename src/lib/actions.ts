"use server"
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import prisma from './prisma';
import { 
  adminSchema,
  memberSchema,
  planSchema,
  feeCollectionSchema,
  expenseSchema,
  reminderSchema,
  followUpSchema,
  attendanceSchema,
} from "./formValidationSchema"

export const createStudent = async ({data}:typeof memberSchema) => {
    try {
      await prisma.member.create({ data: data });
    } catch (error) {
      console.log(error);
      
    }
}
