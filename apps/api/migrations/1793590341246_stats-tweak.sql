-- Up Migration
UPDATE stats
SET value = 1
WHERE value < 1;

ALTER TABLE stats
    ADD CONSTRAINT stats_value_check CHECK (value >= 1);

-- Down Migration
ALTER TABLE stats
    DROP CONSTRAINT stats_value_check;
