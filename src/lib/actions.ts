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

export const createStudent = async (data: any) => {
  // Validate data with Zod schema
  const validationResult = memberSchema.safeParse(data);
  if (!validationResult.success) {
    // Return validation errors if data is invalid
    return { error: validationResult.error.errors };
  }

  try {
    const newStudent = await prisma.member.create({
      data: validationResult.data,
    });
    return newStudent;
  } catch (error) {
    console.error('Error creating student:', error);
    return { error: 'Failed to create student' };
  }
};
