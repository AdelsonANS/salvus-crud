const { Model, DataTypes } = require('sequelize');

class Patient extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            cpf: DataTypes.STRING,
            idade: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
}

module.exports = Patient;