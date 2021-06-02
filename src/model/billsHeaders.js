import Sequelize from 'sequelize';
import { sequelize } from "../db/connection.js";

const bills_headers = sequelize.define('bills_headers', {
    bh_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    bh_bill_code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bh_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    bh_total: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    bh_subtotal: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    bh_iva: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    payment_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    client_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

}, {
    timestamps: false,
    freezeTableName: true
});

export default bills_headers