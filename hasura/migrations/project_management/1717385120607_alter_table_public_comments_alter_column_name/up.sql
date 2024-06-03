alter table "public"."comments" alter column "name" set default CONCAT(nextval('comments_id_seq'::regclass), '5');
