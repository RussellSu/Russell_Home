var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
var keyWordSchema = new Schema(
    {
        name:{type:String,default:""},
        created:{type:Date,default:Date.now},
        updated:{type:Date,default:Date.now}
    },
    {
        collection:"keywords"
    }
);

keyWordSchema.pre("save",function(next){
    this.updated = Date.now();
    next();
});

module.exports = mongoose.Model("keywordModel", keyWordSchema);