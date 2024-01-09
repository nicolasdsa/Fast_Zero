-- CreateTable
CREATE TABLE "journals" (
    "id" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "content" STRING NOT NULL,

    CONSTRAINT "journals_pkey" PRIMARY KEY ("id")
);
