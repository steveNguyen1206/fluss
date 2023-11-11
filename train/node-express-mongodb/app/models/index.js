const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
// do package mooge cung cấp
db.mongoose = mongoose;

// require trong file db.config
db.url = dbConfig.url;


// đĩnh nghĩa cấu trúc dữ liệu
db.tutorials = require("./tutorial.model.js")(mongoose);

// db.posts = require("./post.model.js")(mongoose);

module.exports = db;
