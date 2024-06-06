alter table "public"."task_tags" alter column "user_id" set default nextval('task_tags_user_id_seq'::regclass);
