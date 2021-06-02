import Sequelize from 'sequelize';
import { sequelize } from "../db/connection.js";
import billdetails from './bill_details.js';
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

//Creando Relacion bill-details
bills_headers.hasMany(billdetails,{foreignKey:'bd_bill_header_id'})
//Una bill details solo puede tener  un bill details
billdetails.belongsTo(bills_headers,{foreignKey:'bd_bill_header_id'})

export default bills_headers