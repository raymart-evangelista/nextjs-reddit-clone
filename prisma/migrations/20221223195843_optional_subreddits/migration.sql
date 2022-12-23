-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_subredditId_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "subredditId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_subredditId_fkey" FOREIGN KEY ("subredditId") REFERENCES "Subreddit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
