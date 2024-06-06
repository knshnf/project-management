alter table "public"."comments" drop constraint "comments_task_id_fkey",
  add constraint "comments_task_id_fkey"
  foreign key ("task_id")
  references "public"."task"
  ("id") on update cascade on delete cascade;
