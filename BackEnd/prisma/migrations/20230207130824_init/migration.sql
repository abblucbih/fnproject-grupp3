/*
  Warnings:

  - You are about to drop the column `createdAt` on the `FishPost` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `FishPost` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `SeaPost` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `SeaPost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FishPost" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "SeaPost" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
