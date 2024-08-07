import { Model, DataTypes } from 'sequelize';
import { sequelizeConnection } from '.';

export class UserSchema extends Model {}
export class ProductSchema extends Model {}

UserSchema.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        name: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        refreshToken: { type: DataTypes.STRING, allowNull: true },
    },
    { sequelize: sequelizeConnection, modelName: 'users', timestamps: true },
);

ProductSchema.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        name: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.FLOAT, allowNull: false },
    },
    { sequelize: sequelizeConnection, modelName: 'users' },
);
