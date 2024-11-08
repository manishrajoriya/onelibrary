"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { memberSchema } from "@/lib/formValidationSchema";
import { useFormState } from "react-dom";
import {
  createStudent,
  
  
  
} from "@/lib/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { CldUploadWidget } from "next-cloudinary";

const StudentForm = ({
  type,
  data,
//   setOpen,
  relatedData,
}: {
  type: "create" | "update";
  data?: any;
//   setOpen: Dispatch<SetStateAction<boolean>>;
  relatedData?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<typeof memberSchema>({
    resolver: zodResolver(memberSchema),
  });

  const [img, setImg] = useState<any>();

//   const [state, formAction] = useFormState(
//     type === "create" ? createStudent : updateStudent,
//     {
//       success: false,
//       error: false,
//     }
//   );

  const onSubmit = handleSubmit((data) => {
    console.log("hello");
    console.log(data);
    // formAction( );
  });

//   const router = useRouter();

//   useEffect(() => {
//     if (state.success) {
//       toast(`Student has been ${type === "create" ? "created" : "updated"}!`);
//       setOpen(false);
//       router.refresh();
//     }
//   }, [state, router, type, setOpen]);

//   const { grades, classes } = relatedData;

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new student" : "Update the student"}
      </h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Name"
          name="Full Name"
          defaultValue={data?.name}
          register={register}
        //   error={errors?.name}
        />
        <InputField
          label="Address"
          name="Address"
          defaultValue={data?.address}
          register={register}
        //   error={errors?.address}
        />
        <InputField
          label="Phone"
          name="Phone Number"
          
          defaultValue={data?.contactNumber}
          register={register}
        //   error={errors?.contactNumber}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      {/* <CldUploadWidget
        uploadPreset="school"
        onSuccess={(result, { widget }) => {
          setImg(result.info);
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <div
              className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
              onClick={() => open()}
            >
              <Image src="/upload.png" alt="" width={28} height={28} />
              <span>Upload a photo</span>
            </div>
          );
        }}
      </CldUploadWidget> */}
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Addmission Date"
          name="Addmission Date"
          defaultValue={data?.admissionDate}
          register={register}
        //   error={errors.admissionDate}
        />
        <InputField
          label="Expiry Date"
          name="Expiry Date"
          defaultValue={data?.expiryDate}
          register={register}
        //   error={errors.expiryDate}
        />
        <InputField
          label="Seat Number"
          name="Seat Number"
          defaultValue={data?.seatNumber}
          register={register}
        //   error={errors.seatNumber}
        />
        <InputField
          label="Plan"
          name="Plan"
          defaultValue={data?.plan}
          register={register}
        //   error={errors.plan}
        />
        
        
        {data && (
          <InputField
            label="Id"
            name="id"
            defaultValue={data?.id}
            register={register}
            // error={errors?.id}
            hidden
          />
        )}
        {/* <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Sex</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div> */}
        
          </div>
      <button type="submit" onClick={onSubmit} className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default StudentForm;