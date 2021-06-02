import Sequelize from 'sequelize'
const dbUrl = process.env.DATABASE_URL === undefined ? "postgres://mocewaneegbxpq:3cc81a1184968f522e4313699e3478ae836edf87c9acd9766b743815423ba808@ec2-18-215-111-67.compute-1.amazonaws.com:5432/decuq28hhilr9p" : process.env.DATABASE_URL;


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