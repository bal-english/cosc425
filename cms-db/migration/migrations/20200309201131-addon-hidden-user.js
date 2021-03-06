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
  db.createTable('hidden-user', {
    user_id: {
      type: 'int',
      primaryKey: true,
      foreignKey: {
        name: 'hidden_user_used_id_fk',
        table: 'user',
        rules: {
          onDelete: 'RESTRICT',
          onUpdate: 'CASCADE'
        },
        mapping: 'id'
      }
    },
    reason: {
      type: 'text'
    }
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('hidden-user', {}, callback);
};

exports._meta = {
  "version": 1
};
