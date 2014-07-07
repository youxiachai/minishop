

module.exports = {
    name : 'dev',
    user : 'root',
    pass : null,
    option : {
        dialect: 'sqlite',
        storage: __dirname + '/minishop.sqlite',
        define: {
            timestamps: false,
            freezeTableName: true
        }
    }
}