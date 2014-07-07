/**
 * Created by youxiachai on 14-2-28.
 */


module.exports = function (sequelize, DataType) {
    return sequelize.define('good', {
        id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
        name : {type : DataType.STRING, comment : '商品名'},
        description : {type : DataType.STRING, comment : '描述'},
        stock : {type : DataType.INTEGER, comment : '库存量'},
        sales : {type : DataType.INTEGER, comment : '销量'},
        price : {type : DataType.FLOAT, comment : '成本价'},
        barcode : {type : DataType.STRING, comment : '条形码'}
    },{
        timestamps : true,
        'createdAt' : 'created_at',
        'updatedAt': 'modified_at'
    });
}