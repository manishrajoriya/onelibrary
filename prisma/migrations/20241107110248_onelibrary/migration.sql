-- CreateEnum
CREATE TYPE "CaseColor" AS ENUM ('black', 'blue', 'rose');

-- CreateEnum
CREATE TYPE "CaseFinish" AS ENUM ('smooth', 'textured');

-- CreateEnum
CREATE TYPE "CaseMaterial" AS ENUM ('silicone', 'polycarbonate');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('fulfilled', 'shipped', 'awaiting_shipment');

-- CreateEnum
CREATE TYPE "PhoneModel" AS ENUM ('iphonex', 'iphone11', 'iphone12', 'iphone13', 'iphone14', 'iphone15');

-- CreateTable
CREATE TABLE "Configuration" (
    "id" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "croppedImageUrl" TEXT,
    "imageUrl" TEXT NOT NULL,
    "color" "CaseColor",
    "finish" "CaseFinish",
    "material" "CaseMaterial",
    "model" "PhoneModel",

    CONSTRAINT "Configuration_pkey" PRIMARY KEY ("id")
);
