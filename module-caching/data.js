class users{
    constructor(){}
    name='raghu';
    getUserName(){
        return this.name;
    }
    setUserName(name){
        this.name=name;
    }
}

//when we export instance of a class it will be cached.
// module.exports = new users();
//To avoid caching we need to export class itself.
module.exports={users}