alter table "public"."tags" drop constraint "tag_name_key";
alter table "public"."tags" add constraint "tags_name_key" unique ("name");
