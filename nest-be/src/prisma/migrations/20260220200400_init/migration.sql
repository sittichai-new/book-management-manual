-- CreateTable
CREATE TABLE "Books" (
    "book_id" SERIAL NOT NULL,
    "isbn" TEXT NOT NULL,
    "book_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("book_id")
);
