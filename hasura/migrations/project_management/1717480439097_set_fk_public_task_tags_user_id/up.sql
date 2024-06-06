alter table "public"."task_tags"
  add constraint "task_tags_user_id_fkey"
  foreign key ("user_id")
  references "public"."users"
  ("id") on update cascade on delete cascade;
