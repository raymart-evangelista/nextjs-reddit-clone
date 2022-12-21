/*
  Warnings:

  - Added the required column `subreddit` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "subreddit" TEXT NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;
