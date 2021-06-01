import Sequelize from 'sequelize';
import { sequelize } from "../db/connection.js";

const bills_headers = sequelize.define('bills_headers', {
    bh_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    bh_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    payment_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    client_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default bills_headers