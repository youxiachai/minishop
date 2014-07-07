/**
 * Created by youxiachai on 14-2-28.
 */

var Sequelize = require('sequelize');

//TODO 动态加载配置文件
var DBConfig = require('../../config/db-dev');


var DB = new Sequelize(DBConfig.name,  DBConfig.user,  DBConfig.pass, DBConfig.option);

var User = DB.import(__dirname + '/user'),
    Good = DB.import(__dirname + '/good'),
    Record = DB.import(__dirname + 'record');

Good.hasMany(Record, {foreignKey: 'good_id'});

Record
    .belongsTo(Good, {foreignKey : 'good_id'})
    .belongsTo(User, {foreignKey: 'uid'});



DB.sync().error(function (err){
    console.log(err);
})
//
exports.User = User;
exports.Good = Good;
exports.Record = Record;
exports.DBConnection = DB;