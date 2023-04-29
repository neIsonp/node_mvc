import { Sequelize } from "sequelize";

const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

try {

    sequelize.authenticate();
    console.log('connected');

} catch (err) {
    console.log(err);
}

export default sequelize;