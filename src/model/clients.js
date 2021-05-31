import Sequelize from 'sequelize';
import { sequelize } from "../db/connection.js";

const clients = sequelize.define('clients', {
    cli_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    cli_id_card: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    cli_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cli_born_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    cli_address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cli_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cli_phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cli_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    cli_client_type_id: {
        type: Sequelize.INTEGER
    },
}, {
    timestamps: false,
    freezeTableName: true
});

export default clients