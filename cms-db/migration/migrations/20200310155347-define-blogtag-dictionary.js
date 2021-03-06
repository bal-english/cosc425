'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('blogtag-dict', {
    /*id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },*/
    tag: {
      type: 'text',
      primaryKey: true
      //unique: true
    },
    disallowed: {
      type: 'boolean',
      notNull: true,
      defaultValue: false
    }
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('blogtag-dict', {}, callback);
};

exports._meta = {
  "version": 1
};
