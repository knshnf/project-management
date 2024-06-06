alter table "public"."task_tags" add constraint "task_tags_task_id_tag_id_key" unique ("task_id", "tag_id");
