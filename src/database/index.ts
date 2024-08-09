import { Sequelize } from 'sequelize';

export const sequelizeConnection = new Sequelize(
    'mysql://root:root@localhost:3306/ecommerce-db',
);

export async function authenticateDB() {
    try {
        await sequelizeConnection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
