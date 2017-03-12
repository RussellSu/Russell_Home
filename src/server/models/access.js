var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var accessLogSchema = new Schema({
    date: { type: Date, default: Date.now },
    userId: { type: String, ref: "userModel" },
    name: { type: String, default: "" },
    OrgName: { type: String, default: "" }
}, {
    collection: "accessLog"
});

module.exports = mongoose.model("accessLogModel", accessLogSchema);