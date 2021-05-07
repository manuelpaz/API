class UserController{
constructor(){}

    sayHello(req, res){
        return res.send({message: "Hello Worl!"};)
    }
}
module.exports = UserController;