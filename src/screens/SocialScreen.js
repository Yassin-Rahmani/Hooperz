import HeaderComponent from "../components/HeaderComponent.js";

export default class SocialScreen extends HTMLElement{

    sidebarMenus;

    constructor(){
        super();
        this.innerHTML = this.render();
        window.onclick = this.interactions;

    }

    sidebarRemoveActive = () => {
        const sidebarMenus = document.querySelectorAll(`.sidebar-menu`);
        sidebarMenus.forEach(item => {
                item.classList.remove(`active`);
            })
    }

    searchFriends = () => {
        const friendsSearchInput = document.querySelector('#friends-search-bar');
        let value = friendsSearchInput.value.toLowerCase();
        const friends = document.querySelectorAll(`.friend`);
        
        friends.forEach(friend => {
            let userName = friend.querySelector('.user-name').textContent.toLowerCase();
            if (userName.indexOf(value) != -1){
                friend.style.display = "flex";
            }else{
                friend.style.display = "none";
            }
        });
    }

    searchEvents = () => {
        const eventsSearchInput = document.querySelector('#events-search-bar');
        let value = eventsSearchInput.value.toLowerCase();
        const events = document.querySelectorAll(`.event`);
        
        events.forEach(event => {
            let eventName = event.querySelector('.event-name').textContent.toLowerCase();
            if (eventName.indexOf(value) != -1){
                event.style.display = "flex";
            }else{
                event.style.display = "none";
            }
        });
    }

    openThemeModal = () => {
        const themeModal = document.querySelector('.customize-theme');

        themeModal.style.display = "grid";
    }

    closeThemeModal = (e) => {
        const themeModal = document.querySelector('.customize-theme');
        if(e.target.classList.contains('customize-theme')){
            themeModal.style.display = "none";
        }

    }

    interactions = (e) => {
        if (e.target.classList.contains(`sidebar-menu`)){
            this.sidebarRemoveActive();
            let sidebarMenu = e.target.closest(`.sidebar-menu`);
            sidebarMenu.classList.add(`active`);
        }
        if (e.target.querySelector('#friends-search-bar')){
            const friendsSearchInput = document.querySelector('#friends-search-bar');

            friendsSearchInput.addEventListener('keyup' , this.searchFriends);
        }
        if (e.target.querySelector('#events-search-bar')){
            const eventsSearchInput = document.querySelector('#events-search-bar');

            eventsSearchInput.addEventListener('keyup' , this.searchEvents);
        }
        if (e.target.classList.contains('theme')){
            const theme = document.querySelector('.theme');

            theme.addEventListener('click', this.openThemeModal);
        }
        if (e.target.classList.contains('customize-theme')){
            const themeModal = document.querySelector('.customize-theme');

            themeModal.addEventListener('click', this.closeThemeModal);
        }
        
    }
   
    render(){
        return `
            <header-component></header-component>
            <main>
        <div class="container">
            <div class="left">
                <div class="close-sidebar">
                    <img src="./src/images/svg/close-svgrepo-com.svg" alt="close-menu">
                </div>
                <div class="open-sidebar"></div>
                <div class="followers">
                    <img class="profile-picture-followers" src="./src/images/pdp-lebron.jpg" alt="profile-picture">
                    <div class="followers-username">
                        <h4>Lebron James</h4>
                        <h5>@KingJames</h5>
                        <img id="badge" src="./src/images/svg/badge-reward-medal-svgrepo-com.svg" alt="badge-icon">
                    </div>
                    <div class="followers-numbers">
                        <div>
                            <h4>1.3M</h4>
                            <h5>Followers</h5>
                        </div>
                        <div>
                            <h4>574</h4>
                            <h5>Following</h5>
                        </div>
                    </div>
                </div>
                <nav class="sidebar">
                    <a class="sidebar-menu active" data-link>
                        <span>
                            <img class="sidebar-icons" src="./src/images/svg/home.svg" alt="home-icon">
                        </span>
                        <h3>
                            Home
                        </h3>
                    </a>
                    <a class="sidebar-menu" data-link>
                        <span>
                            <img class="sidebar-icons" src="./src/images/svg/bell.svg" alt="notifications-icon">
                        </span>
                        <h3>
                            Notifications
                        </h3>
                        <div class="notifications-count">
                            6
                        </div>
                    </a>
                    <a class="sidebar-menu" data-link>
                        <span>
                            <img class="sidebar-icons" src="./src/images/svg/envelope-close.svg" alt="messages-icon">
                        </span>
                        <h3>
                            Messages
                        </h3>
                        <div class="messages-count">
                            9+
                        </div>
                    </a>
                    <a class="sidebar-menu sidebar-menu-friends" data-link>
                        <span>
                            <img class="sidebar-icons" src="./src/images/svg/friends-svgrepo-com.svg" alt="friends-icon">
                        </span>
                        <h3>
                            Friends
                        </h3>
                    </a>
                    <a class="sidebar-menu sidebar-menu-events" data-link>
                        <span>
                            <img class="sidebar-icons" src="./src/images/svg/calendar-svgrepo-com.svg" alt="events-icon">
                        </span>
                        <h3>
                            Events
                        </h3>
                    </a>
                    <a class="sidebar-menu" data-link>
                        <span>
                            <img class="sidebar-icons" src="./src/images/svg/mark.svg" alt="bookmarks-icon">
                        </span>
                        <h3>
                            Bookmarks
                        </h3>
                    </a>
                    <a class="sidebar-menu" data-link>
                        <span>
                            <img class="sidebar-icons" src="./src/images/svg/gallery.svg" alt="gallery-icon">
                        </span>
                        <h3>
                            Gallery
                        </h3>
                    </a>
                    <a class="sidebar-menu theme" data-link>
                        <span>
                            <img class="sidebar-icons" src="./src/images/svg/theme.svg" alt="theme-icon">
                        </span>
                        <h3>
                            Theme
                        </h3>
                    </a>
                    <a class="sidebar-menu" data-link>
                        <span>
                            <img class="sidebar-icons" src="./src/images/svg/settings.svg" alt="settings-icon">
                        </span>
                        <h3>
                            Settings
                        </h3>
                    </a>
                </nav>
                <div class="create-post">
                    <p>Post</p>
                    <img src="./src/images/svg/send-2-svgrepo-com.svg" alt="post-icon">
                </div>
            </div>
            <div class="middle">
                <div class="posts">
                    <div class="post">
                        <div class="head-post">
                            <div class="user">
                                <div class="profile-picture">
                                    <img src="./src/images/pdp-kyrie.jpg" alt="prophile-picture">
                                </div>
                                <div class="info">
                                    <div class="handle">
                                        <b><span class="user-name">Kyrie Irving</span></b>
                                        <span class="user-handle">@UncleDrew</span>
                                    </div>
                                    <div class="date">
                                        <small>2 hours ago</small>
                                    </div>
                                </div>
                            </div>
                            <span class="edit-post">
                                <img src="./src/images/svg/dots-horizontal-svgrepo-com(1).svg" alt="edit-post">
                            </span>
                        </div>
                        <div class="quote">
                            <img id="double-quote-left" src="./src/images/svg/double-quote-serif-left-svgrepo-com(1).svg" alt="double-quote-left">
                            <p>
                                Watch out your ankles, Uncle Drew is in the building!
                            </p>
                            <img id="double-quote-right" src="./src/images/svg/double-quote-serif-right-svgrepo-com.svg" alt="double-quote-right">
                        </div>
                        <div class="at">
                        
                        </div>
                        <div class="interactions">
                            <div class="active-interactions">
                                <img src="./src/images/svg/message-svgrepo-com.svg" alt="comments-icon">
                                <img src="./src/images/svg/heart-svgrepo-com(1).svg" alt="like-icon">
                                <img  id="repost-icon" src="./src/images/svg/retweet-svgrepo-com.svg" alt="repost-icon">
                            </div>
                            <div class="share-interactions">
                                <img src="./src/images/svg/share-svgrepo-com.svg" alt="share-icon">
                                <img src="./src/images/svg/mark.svg" alt="markbook-icon">
                            </div>
                        </div>
                    </div>
                    <div class="post">
                        <div class="head-post">
                            <div class="user">
                                <div class="profile-picture">
                                    <img src="./src/images/pdp-bronny.jpg" alt="prophile-picture">
                                </div>
                                <div class="info">
                                    <div class="handle">
                                        <b><span class="user-name">Bronnie James</span></b>
                                        <span class="user-handle">@JamesJr</span>
                                    </div>
                                    <div class="date">
                                        <small>4 hours ago</small>
                                    </div>
                                </div>
                            </div>
                            <span class="edit-post">
                                <img src="./src/images/svg/dots-horizontal-svgrepo-com(1).svg" alt="edit-post">
                            </span>
                        </div>
                        <div class="multimedia">
                            <img src="./src/images/lebron-bronny.jpg" alt="multimedia">
                        </div>
                        <div class="quote">
                            <img id="double-quote-left" src="./src/images/svg/double-quote-serif-left-svgrepo-com(1).svg" alt="double-quote-left">
                            <p>
                                NBA Draft 2024 in a few days... <br>
                                The time is coming dad, I'm making my own path 
                                <img src="./src/images/svg/fire-svgrepo-com.svg" height="40px" alt="fire-emoji">
                            </p>
                            <img id="double-quote-right" src="./src/images/svg/double-quote-serif-right-svgrepo-com.svg" alt="double-quote-right">
                        </div>
                        <div class="at">
                            <span>@KingJames</span>
                        </div>
                        <div class="interactions">
                            <div class="active-interactions">
                                <img src="./src/images/svg/message-svgrepo-com.svg" alt="comments-icon">
                                <img src="./src/images/svg/heart-svgrepo-com(1).svg" alt="like-icon">
                                <img  id="repost-icon" src="./src/images/svg/retweet-svgrepo-com.svg" alt="repost-icon">
                            </div>
                            <div class="share-interactions">
                                <img src="./src/images/svg/share-svgrepo-com.svg" alt="share-icon">
                                <img src="./src/images/svg/mark.svg" alt="markbook-icon">
                            </div>
                        </div>
                    </div>
                    <div class="post">
                        <div class="head-post">
                            <div class="user">
                                <div class="profile-picture">
                                    <img src="./src/images/pdp-davis.jpg" alt="prophile-picture">
                                </div>
                                <div class="info">
                                    <div class="handle">
                                        <b><span class="user-name">Anthony Davies</span></b>
                                        <span class="user-handle">@TheBrow</span>
                                    </div>
                                    <div class="date">
                                        <small>yesterday</small>
                                    </div>
                                </div>
                            </div>
                            <span class="edit-post">
                                <img src="./src/images/svg/dots-horizontal-svgrepo-com(1).svg" alt="edit-post">
                            </span>
                        </div>
                        <div class="multimedia">
                            <div>
                                <img src="./src/images/mamba-forever.jpg" alt="">
                            </div>
                        </div>
                        <div class="quote">
                            <img id="double-quote-left" src="./src/images/svg/double-quote-serif-left-svgrepo-com(1).svg" alt="double-quote-left">
                            <p>
                                Rest in peace Mamba, we ain't forgetting you...
                            </p>
                            <img id="double-quote-right" src="./src/images/svg/double-quote-serif-right-svgrepo-com.svg" alt="double-quote-right">
                        </div>
                        <div class="at">
                            <span>@BlackMamba</span>&<span>2 others</span>
                        </div>
                        <div class="interactions">
                            <div class="active-interactions">
                                <img src="./src/images/svg/message-svgrepo-com.svg" alt="comments-icon">
                                <img src="./src/images/svg/heart-svgrepo-com(1).svg" alt="like-icon">
                                <img  id="repost-icon" src="./src/images/svg/retweet-svgrepo-com.svg" alt="repost-icon">
                            </div>
                            <div class="share-interactions">
                                <img src="./src/images/svg/share-svgrepo-com.svg" alt="share-icon">
                                <img src="./src/images/svg/mark.svg" alt="markbook-icon">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="friends">
                    <div class="friends-header">
                        <img src="./src/images/svg/friends-svgrepo-com.svg" alt="friends-icon">
                        <span>
                            <h3>Friends</h3>
                        </span>
                        <img class="filter" src="./src/images/svg/filter-svgrepo-com.svg" alt="filter-icon">
                    </div>
                    <div class="friends-search">
                        <div class="search-bar">
                            <img class="icon" src="./src/images/svg/search.svg" alt="search-icon">
                            <input type="search" name="friends-search-bar" id="friends-search-bar">
                        </div>
                    </div>
                    <div class="friends-lists">
                        <h5 class="active">FriendList</h5>
                        <h5>Teams</h5>
                        <h5>Requests (8)</h5>
                    </div>
                    <div class="friends-list">
                        <h5>323 friends</h5>
                        <div class="friend">
                            <div class="friend-profile-picture">
                                <img src="./src/images/pdp-bronny.jpg" alt="profile-picture">
                                <div class="active"></div>
                            </div>
                            <div class="handle">
                                <b><span class="user-name">Bronny James</span></b>
                                <span class="user-handle">@JamesJr</span>
                            </div>
                        </div>
                        <div class="friend">
                            <div class="friend-profile-picture">
                                <img src="./src/images/pdp-westbrook.webp" alt="profile-picture">
                                <div class="active"></div>
                            </div>
                            <div class="handle">
                                <b><span class="user-name">Russell Westbrook</span></b>
                                <span class="user-handle">@Westbrook</span>
                            </div>
                        </div>
                        <div class="friend">
                            <div class="friend-profile-picture">
                                <img src="./src/images/pdp-davis.jpg" alt="profile-picture">
                                <div class="active"></div>
                            </div>
                            <div class="handle">
                                <b><span class="user-name">Anthony Davies</span></b>
                                <span class="user-handle">@TheBrow</span>
                            </div>
                        </div>
                        <div class="friend">
                            <div class="friend-profile-picture">
                                <img src="./src/images/pdp-kyrie.jpg" alt="profile-picture">
                                <div class="active"></div>
                            </div>
                            <div class="handle">
                                <b><span class="user-name">Kyrie Irving</span></b>
                                <span class="user-handle">@UncleDrew</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="events">
                    <div class="events-header">
                        <img src="./src/images/svg/calendar-svgrepo-com.svg" alt="events-icon">
                        <span>
                            <h4>Events</h4>
                        </span>
                        <img class="filter" src="./src/images/svg/filter-svgrepo-com.svg" alt="filter-icon">
                    </div>
                    <div class="events-search">
                        <div class="search-bar">
                            <img class="icon" src="./src/images/svg/search.svg" alt="search-icon">
                            <input type="search" name="events-search-bar" id="events-search-bar">
                        </div> 
                    </div>
                    <div class="event">
                        <div class="event-logo">
                            <img src="./src/images/2kl-logo.jpg" alt="logo-event">
                        </div>
                        <div class="event-info">
                            <div class="direct">
                                <img class="views" src="./src/images/svg/eye-svgrepo-com(1).svg" alt="views-icon">
                                <span class="views-number"><small>33687</small></span>
                                <span class="live">LIVE</span>
                            </div>
                            <p>E-sport</p>
                            <b><h4 class="event-name">2K League FINAL</h4></b>
                        </div>
                    </div>
                    <div class="event">
                        <div class="event-logo">
                            <img src="./src/images/tournament.jpg" alt="logo-event">
                        </div>
                        <div class="event-info">
                            <p>Tournament</p>
                            <b><h4 class="event-name">Semi-finals</h4></b>
                            <small><p>Tue, June 26, 4pm PT</p></small>
                        </div>
                    </div>
                    <div class="event">
                        <div class="event-logo">
                            <img src="./src/images/LOGO HOOPERZ.png" alt="logo-event">
                        </div>
                        <div class="event-info">
                            <p>Friendly game</p>
                            <b><h4 class="event-name">SK vs Spurz</h4></b>
                            <small><p>Wed, June 27, 6pm PT</p></small>
                        </div>
                    </div>
                    <div class="more-events">
                        <img src="./src/images/svg/dots-horizontal-svgrepo-com(1).svg" alt="more-events-icon">
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div class="customize-theme">
            <div class="card">
                <h2>Customize your view</h2>
                <p class="text-muted">Manage your banner, color and background</p>
                <div class="banner">
                    <h4>Banner</h4>
                    <div class="choose-banner">
                        <span class="banner-1 active"></span>
                        <span class="banner-2"></span>
                        <span class="banner-3"></span>
                        <span class="banner-4"></span>
                        <span class="banner-5"></span>
                    </div>
                </div>
                <div class="color">
                    <h4>Color</h4>
                    <div class="choose-color">
                        <span class="color-1 active"></span>
                        <span class="color-2"></span>
                        <span class="color-3"></span>
                        <span class="color-4"></span>
                        <span class="color-5"></span>
                    </div>
                </div>
                <div class="background">
                    <h4>Background</h4>
                    <div class="choose-background">
                        <div class="bg-1 active">
                            <span></span>
                            <h5 for="bg-1">Light</h5>
                        </div>
                        <div class="bg-2">
                            <span></span>
                            <h5 for="bg-2">Dim</h5>
                        </div>
                        <div class="bg-3">
                            <span></span>
                            <h5 for="bg-3">Dark</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
customElements.define("social-screen", SocialScreen);