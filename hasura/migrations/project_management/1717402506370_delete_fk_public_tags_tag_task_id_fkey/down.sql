alter table "public"."tags"
  add constraint "tag_task_id_fkey"
  foreign key ("task_id")
  references "public"."task"
  ("id") on update restrict on delete restrict;
