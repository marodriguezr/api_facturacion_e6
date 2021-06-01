import Sequelize from 'sequelize';
import { sequelize } from "../db/connection.js";

const clientsTypes = sequelize.define('clients_types', {
    ct_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ct_value: {
        type: Sequelize.STRING(25),
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true
});

export default clientsTypes