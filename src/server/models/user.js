var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userId: {type:String, default: "", index: true},//20170312+ todayIndex+ phoneNumLast4
    username: {type:String, default: ""},
    nickname: {type:String, default: ""},
    email: {type:String, default: ""},
    phoneNumber: {type: String, default: ""},
    gender:{type: String, default:"secret",enum:["male","female","secret"]},
    created:{type: Date, default:Date.now, index:true},
    updated:{type: Date, default:Date.now},//此处不可用Date.now(); 否则此处时间为启动node时间
    lastLogin: {type: Date, default:Date.now},
    thumbnail: {type: String, default:""},
    level:{type:Number,default: 0}
},{collection:"users"});

userSchema.pre("save", function (next) {
    var user = this;
    user.updated = Date.now();
    next();

});

module.exports = mongoose.model("userModel",userSchema);