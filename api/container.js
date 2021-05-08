const{asClass, createContainer, asFunction, asValue} = require("awilix");

const StartUp = require("./startup");
const Server = require("./server");

const{UserController} = require("../api/controllers");
const Routes = require("../api/routes");

const UserRoutes = require('../api/routes/user.routes')

const config = require("../config/enviroments");

const container = createContainer();
container.register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
    UserController: asClass(UserController).singleton(),
    router : asFunction(Routes).singleton(),
    config: asValue(config),
    UserRoutes: asFunction(UserRoutes).singleton()
});

module.exports = container;