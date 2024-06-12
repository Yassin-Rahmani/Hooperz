import App from "./App.js";
import CreateAccountScreen from "./screens/CreateAccountScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import SocialScreen from "./screens/SocialScreen.js";



export default class Router{

    constructor(){
        
        window.onload = this.navigate;
        window.onpopstate = this.navigate;
        window.onclick = this.handleDataLinks;

    }

    handleDataLinks = (e) =>{
        const link = e.target.closest("[data-link]");
        if(link){
            e.preventDefault();
            history.pushState("", "", link.href);
            this.navigate(e);
        }
    }

    navigate = (e) => {
        const app = new App();

        let page = "";

        if(location.pathname == "/" || location.pathname == "/social"){
            document.title = "Hooperz-Social";
            page = new SocialScreen();
        }
        else if(location.pathname == "/login"){
            document.title = "Login";
            page = new LoginScreen();
        }
        else if(location.pathname == "/create-account"){
            document.title = "Create-Account";
            page = new CreateAccountScreen();
        }
        else {
            page = `<h1>404 not found</h1>`;
        }

        app.render(page);
    }
}