alter table "public"."comments" add constraint "comments_name_key" unique ("name");
ALTER TABLE "public"."comments" ALTER COLUMN "name" drop default;
