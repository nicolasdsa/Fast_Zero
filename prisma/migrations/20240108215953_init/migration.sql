-- CreateTable
CREATE TABLE "users" (
    "id" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update" TIMESTAMP(3) NOT NULL,
    "email" STRING NOT NULL,
    "hash" STRING NOT NULL,
    "firstName" STRING,
    "lastName" STRING,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
