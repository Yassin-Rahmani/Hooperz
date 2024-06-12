import AccountService from "../services/AccountService.js";
import HeaderComponent from "../components/HeaderComponent.js";
import App from "../App.js";
import LoginScreen from "../screens/LoginScreen.js";

export default class CreateAccountScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
        this.querySelector("form").onsubmit = this.handleLoginFormSubmit;
    }

    handleLoginFormSubmit = (e) => {
        e.preventDefault();
        const entries = Object.fromEntries(new FormData(e.target));
        let isValid = true;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        let regexMaj = new RegExp("[A-Z]");
        let regexMin = new RegExp("[a-z]");
        let regexChiffre = new RegExp("[0-9]");
        let regexSpecial = new RegExp("\\W");
        let compteur = 0;

        e.target.querySelector("#lastName-error").textContent = "";
        e.target.querySelector("#firstName-error").textContent = "";
        e.target.querySelector("#email-error").textContent = "";
        e.target.querySelector("#handle-error").textContent = "";
        e.target.querySelector("#password-error").textContent = "";
        e.target.querySelector("#cpassword-error").textContent = "";
        

        if(entries.lastName.length < 2){
            isValid = false;
            e.target.querySelector("#lastName-error").textContent = "The last name must be at least 2 characters long.";
        }

        if(entries.firstName.length < 2){
            isValid = false;
            e.target.querySelector("#firstName-error").textContent = "The first name must be at least 2 characters long.";
        }

        if(entries.email.match(emailRegex) == null){
            isValid = false;
            e.target.querySelector("#email-error").textContent = "The email address is not correct.";
        }

        if(entries.handle.length < 2){
            isValid = false;
            e.target.querySelector("#handle-error").textContent = "The handle must be at least 2 characters long.";
        }

        if(regexMaj.test(entries.password)) compteur++;
        if(regexMin.test(entries.password)) compteur++;
        if(regexChiffre.test(entries.password)) compteur++;
        if(regexSpecial.test(entries.password)) compteur++;
        if(entries.password.length < 8) compteur--;

        switch(true){
            case compteur == 3:
                e.target.querySelector("#password-error").textContent = 'Average password (Please enter at least one uppercase letter, one lowercase letter, one number, one special character and the password must have a length of 8 characters).';
                isValid = false;
                break;
            case compteur == 2:
                e.target.querySelector("#password-error").textContent = 'Weak password (Please enter at least one uppercase letter, one lowercase letter, one number, one special character and the password must have a length of 8 characters).';
                isValid = false;
                break;
            case compteur == 1:
                e.target.querySelector("#password-error").textContent = 'Dangerous password! (Please enter at least one uppercase letter, one lowercase letter, one number, one special character and the password must have a length of 8 characters).';
                isValid = false;
                break;
            case compteur <= 0:
                e.target.querySelector("#password-error").textContent = 'Dangerous password! (Please enter at least one uppercase letter, one lowercase letter, one number, one special character and the password must have a length of 8 characters).';
                isValid = false;
                break;
        }

        if(entries.password != entries.cpassword){
            isValid = false;
            e.target.querySelector("#cpassword-error").textContent = "Password confirmation is not the same.";
        }

        if(isValid){
            const service = new AccountService();
            service.create(entries);
            const app = new App();
            app.render(new LoginScreen());
        }


    }
    

    render(){
        return `
        <header-component></header-component>
        <main>
        <div class="container-create-account">
            <div id="create-account-div">
            <p>Create an account</p>
            <form id="create-account-form" autocomplete>
                <div>
                    <label for="lastName">Last name</label>
                    <br/>
                    <input type="text" name="lastName" id="lastName">
                </div>
                <div id="lastName-error"></div>
                <div>
                    <label for="firstName">First name</label>
                    <br/>
                    <input type="text" name="firstName" id="firstName">
                </div>
                <div id="firstName-error"></div>
                <div>
                    <label for="email">Email</label>
                    <br/>
                    <input type="email" name="email" id="email" autocomplete="on">
                </div>
                <div id="email-error"></div>
                <div>
                    <label for="handle">Handle</label>
                    <br/>
                    <input type="text" name="handle" id="handle">
                </div>
                <div id="handle-error"></div>
                <div>
                    <label for="password">Password</label>
                    <br/>
                    <input type="password" name="password" id="password" >
                </div>
                <div id="password-error"></div>
                <div>
                    <label for="cpassword">Confirm the password</label>
                    <br/>
                    <input type="password" name="cpassword" id="cpassword">
                </div>
                <div id="cpassword-error"></div>
                <div>
                    <button class="create-account-button" type="submit">Create an account</button>
                </div>
            </form>
        </div>
        </div>
        </main>
        `
    }
}

customElements.define("create-account-screen", CreateAccountScreen);