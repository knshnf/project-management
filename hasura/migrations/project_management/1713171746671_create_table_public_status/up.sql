CREATE TABLE "public"."status" ("id" bigserial NOT NULL, "name" varchar NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id","name") , UNIQUE ("id"), UNIQUE ("name"));COMMENT ON TABLE "public"."status" IS E'List of Status';
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
CREATE TRIGGER "set_public_status_updated_at"
BEFORE UPDATE ON "public"."status"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_status_updated_at" ON "public"."status"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
