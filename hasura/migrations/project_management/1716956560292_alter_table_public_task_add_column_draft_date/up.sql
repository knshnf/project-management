alter table "public"."task" add column "draft_date" date
 null default now();
