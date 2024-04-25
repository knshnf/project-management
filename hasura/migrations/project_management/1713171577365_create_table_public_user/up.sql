CREATE TABLE "public"."user" ("id" bigserial NOT NULL, "name" varchar NOT NULL, "last_name" varchar NOT NULL, "first_name" varchar NOT NULL, "middle_name" varchar, "suffix_name" varchar, "username" varchar NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id","username") , UNIQUE ("id"));COMMENT ON TABLE "public"."user" IS E'List of Users';
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
CREATE TRIGGER "set_public_user_updated_at"
BEFORE UPDATE ON "public"."user"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_user_updated_at" ON "public"."user"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
