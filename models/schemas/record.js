/**
 * Created by youxiachai on 14-2-28.
 */

module.exports = function (sequelize, DataType) {
    return sequelize.define('record', {
        id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
        good_id : {type : DataType.INTEGER, comment : '商品ID'},
        uid : {type : DataType.INTEGER, comment: '谁卖出的'},
        price : {type : DataType.FLOAT, comment:'卖出的价格'}
    },{
        timestamps : true,
        'createdAt' : 'created_at',
        'updatedAt': 'modified_at'
    });
}