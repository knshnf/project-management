alter table "public"."comments" alter column "name" set default nextval('comments_id_seq'::regclass);
