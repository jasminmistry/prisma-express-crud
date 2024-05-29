-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeachersOfStudents" (
    "teacherId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "TeachersOfStudents_pkey" PRIMARY KEY ("teacherId","studentId")
);

-- AddForeignKey
ALTER TABLE "TeachersOfStudents" ADD CONSTRAINT "TeachersOfStudents_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeachersOfStudents" ADD CONSTRAINT "TeachersOfStudents_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
