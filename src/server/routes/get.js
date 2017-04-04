module.exports = function(app){
    var markdowns = require("../controllers/get/markdown");
    app.get("/markdown", markdowns.readMd);
};