import Sequelize from 'sequelize';
import { sequelize } from "../db/connection.js";

const paymentsTypes = sequelize.define('payments_types', {
    pt_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    pt_value: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default paymentsTypes;