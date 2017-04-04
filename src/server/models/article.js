var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var articleSchema = new Schema(
    {
        name: {type: String, default: ""},
        description: {type: String, default: ""},
        body: {type: String, default: ""},
        keyWord: [{type: Schema.Types.ObjectId, ref: "keyWordModel",index:true}],
        created: {type: Date, default: Date.now},
        updated: {type: Date, default: Date.now},
    },
    {
        collection: "articles"
    }
);

articleSchema.pre("save",function(next){
    this.updated = Date.now();
    next();
});

modules.exports = mongoose.Model("articleModel", articleSchema);
