-- Up Migration
ALTER TABLE toons
    RENAME COLUMN iconurl TO icon_url;

ALTER TABLE stats
    ADD COLUMN value INT NOT NULL DEFAULT(1);

ALTER TABLE abilities
    ALTER COLUMN description SET NOT NULL;

ALTER TABLE quests
    ALTER COLUMN content SET NOT NULL;

-- Down Migration
ALTER TABLE toons
    RENAME COLUMN icon_url TO iconurl;

ALTER TABLE stats
    DROP COLUMN value;

ALTER TABLE abilities
    ALTER COLUMN description DROP NOT NULL;

ALTER TABLE quests
    ALTER COLUMN content DROP NOT NULL;
