import Sequelize from 'sequelize';
import { sequelize } from "../db/connection.js";

const bill_details = sequelize.define('bills_details', {
    bd_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    bd_amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bd_price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bd_has_iva: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    bd_bill_header_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bd_product_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true
});

export default bill_details