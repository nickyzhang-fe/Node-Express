/**
 * Created by Cral-Gates on 2018/4/1.
 */
/**
 * 用户信息
 */
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

/**
 * 朝代列表
 * */
var DynastySchema = new Schema({
    dynasty : { type: String }
});

/**
 * 诗文形式
 * */
var PoemFormSchema = new Schema({
    type : { type: String }
});

/**
 * 诗文类型
 * */
var PoemTypeSchema = new Schema({
    type : { type: String }
});

/**
 * 作者列表
 * */
var AuthorSchema = new Schema({
    img : { type: String },
    name : { type: String },
    desc : { type: String },
    star : { type: String }
});

module.exports = mongoose.model('Dynasty',DynastySchema);
module.exports = mongoose.model('PoemForm',PoemFormSchema);
module.exports = mongoose.model('PoemType',PoemTypeSchema);
module.exports = mongoose.model('Author',AuthorSchema);