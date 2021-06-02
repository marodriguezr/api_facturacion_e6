import Sequelize from 'sequelize'


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