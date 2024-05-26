export default class SocialScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return ``
    }
}
customElements.define("social-screen", SocialScreen);