ALTER TABLE "public"."comments" ALTER COLUMN "name" drop default;
alter table "public"."comments" alter column "name" drop not null;
