/*
  Warnings:

  - The values [credit_debit] on the enum `CardType` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `password` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CardType_new" AS ENUM ('credit', 'debit', 'both');
ALTER TABLE "cards" ALTER COLUMN "type" TYPE "CardType_new" USING ("type"::text::"CardType_new");
ALTER TYPE "CardType" RENAME TO "CardType_old";
ALTER TYPE "CardType_new" RENAME TO "CardType";
DROP TYPE "CardType_old";
COMMIT;

-- AlterTable
ALTER TABLE "cards" ADD COLUMN     "password" TEXT NOT NULL;
