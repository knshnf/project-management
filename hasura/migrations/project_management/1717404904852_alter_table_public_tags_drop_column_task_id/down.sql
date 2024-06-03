alter table "public"."tags" alter column "task_id" drop not null;
alter table "public"."tags" add column "task_id" int8;
