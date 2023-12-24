/*
  Warnings:

  - You are about to alter the column `first_name` on the `studentragistration` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `last_name` on the `studentragistration` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `age` on the `studentragistration` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `grade` on the `studentragistration` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `courses` on the `studentragistration` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE `studentragistration` MODIFY `first_name` VARCHAR(100) NOT NULL,
    MODIFY `last_name` VARCHAR(100) NOT NULL,
    MODIFY `age` VARCHAR(100) NOT NULL,
    MODIFY `grade` VARCHAR(100) NOT NULL,
    MODIFY `courses` VARCHAR(100) NOT NULL;
