import Sequelize from 'sequelize';
import { sequelize } from "../db/connection.js";
import bills_headers from "./billsHeaders.js"; 

const clients = sequelize.define('clients', {
    cli_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
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
    cli_payment_type_id: {
        type: Sequelize.INTEGER
    },
}, {
    timestamps: false,
    freezeTableName: true
});

//Creando Relacion bill-details
clients.hasMany(bills_headers,{foreignKey:'client_id'})
//Una bill details solo puede tener  un bill details
bills_headers.belongsTo(clients,{foreignKey:'client_id'})

export default clients