class StartUp{
    constructor({server}){
        this.server = server;
    }
    async start(){
        await this._server.start();
    }
}

module.exports = StartUp;