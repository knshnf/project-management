BEGIN TRANSACTION;
ALTER TABLE "public"."comments" DROP CONSTRAINT "comments_pkey";

ALTER TABLE "public"."comments"
    ADD CONSTRAINT "comments_pkey" PRIMARY KEY ("id");
COMMIT TRANSACTION;
