var express = require("express");
var router = express.Router();
var index = require("../models/index.js");

router.get("/", function(req, res) {
  index.all(function(data) {
    var hbsObject = {
      indexs: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/indexs", function(req, res) {
  index.create([
    "index_name", "register"
  ], [
    req.body.index_name, req.body.register
  ], function(result) {
  
    res.json({ id: result.insertId });
  });
});

router.put("/api/indexs/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  index.update({
    register: req.body.register
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/indexs/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  index.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
