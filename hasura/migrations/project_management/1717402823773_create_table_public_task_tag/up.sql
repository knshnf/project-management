CREATE TABLE "public"."task_tag" ("id" bigserial NOT NULL, "task_id" bigint NOT NULL, "tag_id" bigint NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));
