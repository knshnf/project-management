alter table "public"."task_tags"
  add constraint "task_tags_tag_id_fkey"
  foreign key ("tag_id")
  references "public"."tags"
  ("id") on update restrict on delete cascade;
