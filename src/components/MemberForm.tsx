import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Validation schema using Zod
const memberSchema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1,"Address is required"),
  contactNumber: z
    .string()
    .min(1, "Contact number is required")
    .regex(/^[0-9]+$/, "Contact number must be numeric"),
  email: z.string().email("Invalid email format").optional(),
  admissionDate: z.date({ required_error: "Admission date is required" }),
  expiryDate: z.date({ required_error: "Expiry date is required" }),
  seatNumber: z.number().optional(),
  birthday: z.date().optional(),
  anniversary: z.date().optional(),
  profileImage: z.string().optional(),
});

// Convert Zod schema into TypeScript type
export type MemberFormData = z.infer<typeof memberSchema>;

export default function MemberForm({ onSubmit, defaultValues = {} }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<MemberFormData>({
    defaultValues,
    resolver: zodResolver(memberSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      <div>
        <label className="block mb-1">Name</label>
        <input
          {...register("name")}
          type="text"
          className="w-full border rounded p-2"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Address</label>
        <input
          {...register("address")}
          type="text"
          className="w-full border rounded p-2"
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Contact Number</label>
        <input
          {...register("contactNumber")}
          type="text"
          className="w-full border rounded p-2"
        />
        {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Email</label>
        <input
          {...register("email")}
          type="email"
          className="w-full border rounded p-2"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Admission Date</label>
        <Controller
          control={control}
          name="admissionDate"
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              className="w-full border rounded p-2"
            />
          )}
        />
        {errors.admissionDate && <p className="text-red-500 text-sm">{errors.admissionDate.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Expiry Date</label>
        <Controller
          control={control}
          name="expiryDate"
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              className="w-full border rounded p-2"
            />
          )}
        />
        {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Seat Number</label>
        <input
          {...register("seatNumber")}
          type="Number"
          className="w-full border rounded p-2"
        />
        {errors.seatNumber && <p className="text-red-500 text-sm">{errors.seatNumber.message}</p>}
      </div>

      <div>
        <label className="block mb-1">Birthday</label>
        <Controller
          control={control}
          name="birthday"
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              className="w-full border rounded p-2"
            />
          )}
        />
      </div>

      <div>
        <label className="block mb-1">Anniversary</label>
        <Controller
          control={control}
          name="anniversary"
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              className="w-full border rounded p-2"
            />
          )}
        />
      </div>

      <div>
        <label className="block mb-1">Profile Image URL</label>
        <input
          {...register("profileImage")}
          type="text"
          className="w-full border rounded p-2"
        />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}
