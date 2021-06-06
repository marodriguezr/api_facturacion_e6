import Sequelize from 'sequelize';
import { sequelize } from "../db/connection.js";
import billHeaders from "./billsHeaders.js"; 
import clients from "./clients.js"; 

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

//Creando Relacion bill-headers
paymentsTypes.hasMany(billHeaders,{foreignKey:'payment_type_id'})
//Una bill-headers solo puede tener un paymentstypes
billHeaders.belongsTo(paymentsTypes,{foreignKey:'payment_type_id'})

//Creando Relacion clients
paymentsTypes.hasMany(clients,{foreignKey:'cli_payment_type_id'})
//Una clients solo puede tener un paymentstypes
clients.belongsTo(paymentsTypes,{foreignKey:'cli_payment_type_id'})

export default paymentsTypes;