export default class Account{
    #id;
    #lastName;
    #firstName;
    #email;
    #handle;
    #password;
    static idcounter = 0;

    constructor(props){
        const{id, lastName, firstName, email, handle, password} = props;
        this.#id = id || Account.nextId();
        this.#lastName = lastName;
        this.#firstName = firstName;
        this.#email = email;
        this.#handle = handle;
        this.#password = password;
    }

    static nextId() {
        Account.idcounter++;
        return Account.idcounter;
    }

    get id(){
        return this.#id;
    }

    get lastName(){
        return this.#lastName;
    }

    get firstName(){
        return this.#firstName;
    }

    get email(){
        return this.#email;
    }

    get handle(){
        return this.#handle;
    }

    get password(){
        return this.#password;
    }

    set lastName(value){
        if(value.length >= 2) return;
        this.#lastName = value;
    }

    set firstName(value){
        if(value.length >= 2) return;
        this.#firstName = value;
    }

    set email(value){

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(value.match(emailRegex) != null) return;
        this.#email = value;
    }

    set handle(value){
        if(value.length >= 2) return;
        this.#handle = value;
    }

    set password(value){

        let regexMaj = new RegExp("[A-Z]");
        let regexMin = new RegExp("[a-z]");
        let regexChiffre = new RegExp("[0-9]");
        let regexSpecial = new RegExp("\\W");
        let compteurMdp = 0;

        if(regexMaj.test(value)) compteur++;
        if(regexMin.test(value)) compteur++;
        if(regexChiffre.test(value)) compteur++;
        if(regexSpecial.test(value)) compteur++;
        if(value.length < 8) compteur--;

        if(compteurMdp == 4) return;
        this.#password = value;
    }

    toJSON(){

        const jsonObject = {
            
            id: this.#id,
            lastName: this.#lastName,
            firstName: this.#firstName,
            email: this.#email,
            handle: this.#handle,
            password: this.#password

        }
        return jsonObject;
    }
    
}