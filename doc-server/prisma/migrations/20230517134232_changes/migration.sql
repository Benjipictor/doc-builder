/*
  Warnings:

  - Added the required column `checklistId` to the `CommentsOnChecklistItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CommentsOnChecklistItem" DROP CONSTRAINT "CommentsOnChecklistItem_itemId_fkey";

-- AlterTable
ALTER TABLE "CommentsOnChecklistItem" ADD COLUMN     "checklistId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "CommentsOnChecklistItem" ADD CONSTRAINT "CommentsOnChecklistItem_checklistId_fkey" FOREIGN KEY ("checklistId") REFERENCES "Checklist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
