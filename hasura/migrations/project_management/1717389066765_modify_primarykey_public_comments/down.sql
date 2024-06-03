alter table "public"."comments" drop constraint "comments_pkey";
alter table "public"."comments"
    add constraint "comments_pkey"
    primary key ("name", "id");
