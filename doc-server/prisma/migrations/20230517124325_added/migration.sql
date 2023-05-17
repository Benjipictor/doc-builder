/*
  Warnings:

  - Added the required column `comments` to the `CommentsOnChecklistItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CommentsOnChecklistItem" ADD COLUMN     "comments" TEXT NOT NULL;
