/*
  Warnings:

  - A unique constraint covering the columns `[animeName]` on the table `MyAnimes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `animeName` to the `MyAnimes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MyAnimes" ADD COLUMN "animeName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "MyAnimes_animeName_key" ON "MyAnimes"("animeName");
