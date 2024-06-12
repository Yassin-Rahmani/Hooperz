import Account from "../models/Account.js";

export default class AccountService {
    data = [];

    constructor(){
        if(localStorage.getItem('accounts')){
            this.data = JSON.parse(localStorage.getItem('accounts')).map(jsonObj => {
                return new Account(jsonObj);
            });
        }
    }

    create(entries){
        const account = new Account(entries);
        this.data.push(account);
        localStorage.setItem('accounts', JSON.stringify(this.data));
    }

    read(filter){
        return filter ? this.data.filter(filter) : this.data;
    }

    update(){

    }

    delete(){

    }
}