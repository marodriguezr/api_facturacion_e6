import Sequelize from 'sequelize'

const dbUrl = process.env.DATABASE_URL === undefined ? "postgres://postgres:1234@localhost:5432/api_facturacion_a6" : process.env.DATABASE_URL;

export const sequelize = new Sequelize(
    dbUrl,
    {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {}        
    }
)