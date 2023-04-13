/*
  Warnings:

  - You are about to drop the column `espisodesCount` on the `MyAnimes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MyAnimes" DROP COLUMN "espisodesCount",
ADD COLUMN     "episodesCount" INTEGER NOT NULL DEFAULT 0;
