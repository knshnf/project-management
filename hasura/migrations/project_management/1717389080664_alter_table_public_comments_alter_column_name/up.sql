alter table "public"."comments" alter column "name" set default '""';
alter table "public"."comments" drop constraint "comments_name_key";
