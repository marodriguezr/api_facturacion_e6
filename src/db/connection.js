import Sequelize from 'sequelize'

const dbUrl = process.env.DATABASE_URL === undefined ? "postgres://postgres:admin@localhost:5432/api_facturacion_a6" : process.env.DATABASE_URL;

export const sequelize = new Sequelize(
    dbUrl,
    {
        define: {
            freezeTableName: true
        },
        dialect: 'postgres',
        "dialectOptions": {
            ssl: {
                require: true,
                rejectUnauthorized: false // <<<<<<< YOU NEED THIS
            }
        }
    }
)