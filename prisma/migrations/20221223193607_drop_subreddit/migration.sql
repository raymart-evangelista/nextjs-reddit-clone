/*
  Warnings:

  - You are about to drop the column `subreddit` on the `Post` table. All the data in the column will be lost.
  - Added the required column `subredditId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "subreddit",
ADD COLUMN     "dislikedById" TEXT,
ADD COLUMN     "likedById" TEXT,
ADD COLUMN     "subredditId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Subreddit" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "topicId" TEXT,

    CONSTRAINT "Subreddit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subreddit_name_key" ON "Subreddit"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_name_key" ON "Topic"("name");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_likedById_fkey" FOREIGN KEY ("likedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_dislikedById_fkey" FOREIGN KEY ("dislikedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_subredditId_fkey" FOREIGN KEY ("subredditId") REFERENCES "Subreddit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subreddit" ADD CONSTRAINT "Subreddit_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;
