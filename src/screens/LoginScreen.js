import HeaderComponent from "../components/HeaderComponent.js";
import App from "../App.js";
import SocialScreen from "../screens/SocialScreen.js";

export default class LoginScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();

        this.querySelector("form").onsubmit = this.handleLoginFormSubmit;
    }

    handleLoginFormSubmit = (e) => {
        e.preventDefault();
        const entries = Object.fromEntries(new FormData(e.target));
        let isValid = false;
        let accounts = JSON.parse(localStorage.getItem("accounts"));
       
        accounts.forEach((item) => {
            if(item.email == entries.email && item.mdp == entries.mdp){
                isValid = true;
            }
        });

        if(isValid){
            console.log("connexion ok.");
            const app = new App();
            app.render(new SocialScreen());
        }else{
            e.target.querySelector("#login-password-error").textContent = 'Email or password incorrect.';
        }

    }

    render(){
        return `
        <header-component></header-component>
        <main>
        <div class="container-login">
            <div id="login-div">
            <p>Connexion</p>
            <form id="login-form" >
                <div>
                    <label for="email" class="form-label">Email</label>
                    <br/>
                    <input type="email" class="form-control" name="email" id="email"  autocomplete="on">
                </div>
                <div>
                    <label for="password" class="form-label">Password</label>
                    <br/>
                    <input type="password" class="form-control" name="password" id="password">
                </div>
                <div id="login-password-error"></div>
                <div class="create-account-link"><a href="/create-account" data-link>Create an account</a></div>
                <div class="login-button">
                    <button type="submit">Connexion</button>
                </div>
            </form>
        </div>
        </div>
        </main>
        `
    }
}

customElements.define("login-screen", LoginScreen);