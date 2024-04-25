CREATE TABLE "public"."task_type" ("id" bigserial NOT NULL, "name" varchar NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id","name") , UNIQUE ("id"), UNIQUE ("name"));COMMENT ON TABLE "public"."task_type" IS E'List of Task Types';
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
CREATE TRIGGER "set_public_task_type_updated_at"
BEFORE UPDATE ON "public"."task_type"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_task_type_updated_at" ON "public"."task_type"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
