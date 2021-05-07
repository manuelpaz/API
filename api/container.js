const{asClass, createContainer, asFunction, asValue} = require("awilix");

const StartUp = require("./startup");
const Server = require("./server");

const{UserController} = require("../api/controllers");
const Routes = require("../api/routes");

const config = require("../config");

const container = createContainer();
container.register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton()
})
.register({
    UserController: asClass(UserController).singleton()
})
.register({
    route: asFunction(Routes).singleton()
})
.register({
    config: asValue(config)
});
module.exports = container;