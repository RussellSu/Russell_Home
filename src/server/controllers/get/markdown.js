var markdown = require("markdown-js");

exports.readMd = function(req, res){
    var mdContent = "***title***";
    var html = markdown.makeHtml(mdContent);
    // res.status(200).send(html);
    res.status(200).send({html:html});
}