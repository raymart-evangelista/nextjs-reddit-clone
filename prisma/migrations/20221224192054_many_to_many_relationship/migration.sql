/*
  Warnings:

  - You are about to drop the column `dislikedById` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `likedById` on the `Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_dislikedById_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_likedById_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "dislikedById",
DROP COLUMN "likedById";

-- CreateTable
CREATE TABLE "_LikedPosts" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DislikedPosts" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LikedPosts_AB_unique" ON "_LikedPosts"("A", "B");

-- CreateIndex
CREATE INDEX "_LikedPosts_B_index" ON "_LikedPosts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DislikedPosts_AB_unique" ON "_DislikedPosts"("A", "B");

-- CreateIndex
CREATE INDEX "_DislikedPosts_B_index" ON "_DislikedPosts"("B");

-- AddForeignKey
ALTER TABLE "_LikedPosts" ADD CONSTRAINT "_LikedPosts_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LikedPosts" ADD CONSTRAINT "_LikedPosts_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DislikedPosts" ADD CONSTRAINT "_DislikedPosts_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DislikedPosts" ADD CONSTRAINT "_DislikedPosts_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
