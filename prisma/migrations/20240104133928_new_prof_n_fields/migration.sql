/*
  Warnings:

  - You are about to drop the column `rating` on the `Company` table. All the data in the column will be lost.
  - The `jobDescription` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `domain` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profileId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `about` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_companyId_fkey";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "rating",
ADD COLUMN     "about" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "level" TEXT NOT NULL,
ADD COLUMN     "niceToHave" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "skills" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "jobDescription",
ADD COLUMN     "jobDescription" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "domain",
ADD COLUMN     "domain" TEXT[] DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "companyId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "image",
ADD COLUMN     "profileId" UUID,
ADD COLUMN     "username" TEXT;

-- CreateTable
CREATE TABLE "Profile" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "skills" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "locationPrefs" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "jobTypePrefs" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "salaryPrefStart" TEXT,
    "salaryPrefEnd" TEXT,
    "phone" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_profileId_key" ON "User"("profileId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
