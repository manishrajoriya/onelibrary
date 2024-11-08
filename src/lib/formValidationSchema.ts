import { z } from "zod";

// Admin schema
const adminSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  email: z.string().email("Invalid email format"),
});

// Member schema
const memberSchema = z.object({
  memberId: z.number().optional(),
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1).optional(),
  contactNumber: z.string().regex(/^[0-9]+$/, "Contact Number should contain only numbers").min(10, "Contact Number must be at least 10 digits"),
  email: z.string().email("Invalid email format").optional(),
  admissionDate: z.date(),
  expiryDate: z.date(),
  status: z.enum(["LIVE", "EXPIRED"]),
  seatNumber: z.number().optional(),
  profileImage: z.string().url("Invalid URL format").optional(),
  birthday: z.date().optional(),
  anniversary: z.date().optional(),
  planId: z.number().optional(),
});

// Plan schema
const planSchema = z.object({
  name: z.string().min(1, "Plan name is required"),
  description: z.string().optional(),
  duration: z.number().int().positive("Duration must be a positive integer"),
  amount: z.number().nonnegative("Amount must be a non-negative number"),
});

// Fee Collection schema
const feeCollectionSchema = z.object({
  memberId: z.number().int().positive("Member ID must be a positive integer"),
  amountPaid: z.number().nonnegative("Amount Paid must be a non-negative number"),
  totalAmount: z.number().nonnegative("Total Amount must be a non-negative number"),
  dueAmount: z.number().nonnegative("Due Amount must be a non-negative number"),
  dueDate: z.date(),
  status: z.enum(["PAID", "PENDING", "OVERDUE"]),
});

// Expense schema
const expenseSchema = z.object({
  description: z.string().min(1, "Description is required"),
  amount: z.number().positive("Amount must be a positive number"),
  date: z.date(),
});

// Reminder schema
const reminderSchema = z.object({
  memberId: z.number().int().positive("Member ID must be a positive integer"),
  message: z.string().min(1, "Message is required"),
  dueDate: z.date(),
});

// Follow-Up schema
const followUpSchema = z.object({
  memberId: z.number().int().positive("Member ID must be a positive integer"),
  followUpDate: z.date(),
});

// Attendance schema
const attendanceSchema = z.object({
  memberId: z.number().int().positive("Member ID must be a positive integer"),
  date: z.date(),
  status: z.enum(["PRESENT", "ABSENT"]),
});

export {
  adminSchema,
  memberSchema,
  planSchema,
  feeCollectionSchema,
  expenseSchema,
  reminderSchema,
  followUpSchema,
  attendanceSchema,
};
