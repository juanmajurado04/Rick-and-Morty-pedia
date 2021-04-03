const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="/">
                        Rick And Morty pedia
                    </a>
                </h1>
            </div>
            <div class="Header-nav">
                <a class="About-button" href="#/about">
                    About
                </a>
            </div>
        </div>
    `;

    return view;
}

export default Header;