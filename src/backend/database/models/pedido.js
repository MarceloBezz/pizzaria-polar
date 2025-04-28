'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    static associate(models) {
      Pedido.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId'
      })

      Pedido.belongsTo(models.Produto, {
        foreignKey: 'produtoId'
      })
    }
  }
  Pedido.init({
    usuarioId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    produtoId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'produtos',
        key: 'id'
      }
    } ,
    quantidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedido',
    tableName: 'pedidos'
  });
  return Pedido;
};