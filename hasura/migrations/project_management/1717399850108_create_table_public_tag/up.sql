CREATE TABLE "public"."tag" ("id" bigserial NOT NULL, "name" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "color" text, "task_id" bigint NOT NULL, "sort" bigserial NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("task_id") REFERENCES "public"."task"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"), UNIQUE ("name"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_tag_updated_at"
BEFORE UPDATE ON "public"."tag"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_tag_updated_at" ON "public"."tag" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
