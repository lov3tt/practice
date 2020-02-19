var orm = require("../config/orm.js");

var index = {
    all:function(cb) {
        orm.all("indexs", function(res) {
            cb(res);
        });
    },

    // cols and vals are arrays.abnf
    create: function(cols, vals, cb) {
        orm.create("indexs", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("indexs", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("indexs", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = index;