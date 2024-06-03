alter table "public"."comments" alter column "name" set default concat(nextval('comments_id_seq'::regclass), '5');
