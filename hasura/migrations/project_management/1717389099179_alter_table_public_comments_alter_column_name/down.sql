alter table "public"."comments" alter column "name" set not null;
alter table "public"."comments" alter column "name" set default '""'::text;
