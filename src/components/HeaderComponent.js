export default class HeaderComponent extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }


    render(){

        return `
            <header>
        <nav class="navbar-header">
            <div class="container">
                <img id="logo" src="./src/images/Stinger HOOPERZ no-bg.png" alt="logo">
                <div class="search-button">
                    <img id="icon-search" src="./src/images/svg/search-svgrepo-com(2).svg" alt="icon-search">
                </div>
                <div class="menu-button">
                    <a href="/login" data-link><img id="icon-menu" src="./src/images/svg/menu-svgrepo-com(1).svg" alt="icon-menu"></a>
                </div>
                <div class="navbar">
                    <ul>
                        <li><a class="active" href="/social" data-link>Social</a></li>
                        <li><a href="#" data-link>Competition</a></li>
                        <li><a href="#" data-link>Forum</a></li>
                        <li><a href="#" data-link>Shop</a></li>
                        <li class="more"><a href="#" data-link>More</a>
                            <img id="down-arrow-icon" class="icon" src="./src/images/svg/down-arrow-backup-2-svgrepo-com.svg" alt="down-arrow-icon">
                            <ul class="more-list">
                                <li><a href="#" data-link="">Coaching</a></li>
                                <li><a href="#" data-link="">Games</a></li>
                                <li><a href="#" data-link="">Contact</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="profile">
                    <a href="/login" data-link><img class="profile-picture" src="./src/images/pdp-lebron.jpg" alt="profile-picture"></a>
                    <div class="active"></div>
                </div>
            </div>
            <div class="header-bottom">
                <div class="search-bar">
                    <img class="icon" src="./src/images/svg/search.svg" alt="search-icon">
                    <input name="search" type="search" placeholder="Search">
                </div>
            </div>
        </nav>
    </header>
        `;

    }
}
customElements.define("header-component", HeaderComponent);