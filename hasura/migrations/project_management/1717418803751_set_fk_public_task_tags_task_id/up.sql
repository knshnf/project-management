alter table "public"."task_tags"
  add constraint "task_tags_task_id_fkey"
  foreign key ("task_id")
  references "public"."task"
  ("id") on update restrict on delete cascade;
