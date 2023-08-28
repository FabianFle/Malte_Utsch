class HeaderSwitch extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/ `
        <header>
        <div>
            <a href="index.html"><img src="img/logo.png"></a>
        </div>
        <div class="headerLinks">
            <a href="index.html">Home</a> |
            <a href="#aboutUs">Über uns</a> |
            <a href="#services">Leistungen</a> |
            <a href="#ourTeam">Unser Team</a> |
            <a href="#contactForm">Kontakt</a>
        </div>
    </header>

    <img onclick="openResponsMenu()" src="./img/menu.png" class="headerMenu" id="headerMenu">
    <img onclick="CloseResponsMenu()" src="./img/close.png" class="headerMenuClose d-none" id="headerMenuClose">
    <div onclick="CloseResponsMenu()" class="responsivBackgroundMenu d-none" id="responsivBackgroundMenu">
        <div class="responsivHeader d-none" id="responsivHeader">
            <div><a href="index.html">Home</a></div>
            <div><a href="#aboutUs">Über uns</a></div>
            <div><a href="#services">Leistungen</a></div>
            <div><a href="#ourTeam">Unser Team</a></div>
            <div><a href="#contactForm">Kontakt</a></div>
        </div>
    </div>
    `;
    }
}

customElements.define('my-header', HeaderSwitch)


// #####################################################################################################
// #####################################################################################################

function generateInfo(infoForTheWork,  i) {
    return /*html*/ `
        <div onclick="openInfos('${infoForTheWork.name}', '${infoForTheWork.img}', '${infoForTheWork.text}')">
            <div class="serviceDiv">
                <img class="marginRight imgBorderLeftSeit" src="${infoForTheWork['img']}">
                <div>
                    <h3 class="h3Headline">${infoForTheWork['name']}</h3>
                    <span class="serviceDescription">${infoForTheWork['text']}</span>
                </div>
            </div>
        </div>
    `;
}

// #####################################################################################################
// #####################################################################################################

function showInfos(name, img, text) {
    return /*html*/ `
        <div class="bigInfoDiv" id="bigInfoDivId">
            <img class="closeImgBigInfo" src="./img/close.png" onclick="closeBigInfo()">
            <div class="bigInfosPosition">
                <img class="bigImg" src="${img}">
                <h1 class="bigName">${name}</h1>
                <span class="bigText">${text}</span>
            </div>
        </div>
    `;
}

// #####################################################################################################
// #####################################################################################################


class FooterSwitch extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/ `
        <footer id="contactForm">
        <div class="responsivImgFooter">
            <a href="index.html"><img class="footerLogo" src="img/logo-white.png"></a>
        </div>

        <div class="footerContactDiv">
            <span class="contactText">Kontakt</span>
            <div class="contactDiv">
                <div class="distance">
                    <a class="center" href="mailto:info@forstbetrieb-utsch.de">
                        <img src="img/email.png">
                        <span>info@forstbetrieb-utsch.de</span>
                    </a>
                </div>
                <div class="distance">
                    <a class="center" href="tel:01717704568">
                        <img src="img/mobile.png">
                        <span>0171 7704568</span>
                    </a>
                </div>
                <div class="distance">
                    <a class="center" target="_blank" href="https://goo.gl/maps/wRbTdgaRzCvNWJhPA">
                        <img src="img/map.png">
                        <span>Am Siegenstein 66, 57080 Siegen</span>
                    </a>
                </div>
                <div class="distance">
                    <a class="center" href="http://www.forstbetrieb-utsch.de/Forstbetrieb_Malte_Utsch.vcf">
                        <img src="img/download.png">
                        <span>Kontaktdaten herunterladen (VCF-Format)</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="footerServiceDiv">
            <div class="footerMarginBotten"><span class="footerHeadlineService">Leistungen</span></div>
            <div class="footerService"><a class="textDecorationNone" href="#services">-
                    <span>Gefahrbaumfällungen</span></a></div>
            <div class="footerService"><a class="textDecorationNone" href="#services">-
                    <span>Seilklettertechnik</span></a></div>
            <div class="footerService"><a class="textDecorationNone" href="#services">-
                    <span>Landschaftspflege</span></a></div>
            <div class="footerService"><a class="textDecorationNone" href="#services">-
                    <span>Brennholzverkauf</span></a></div>
            <div class="footerService"><a class="textDecorationNone" href="#services">- <span>Bautätigkeiten</span></a>
            </div>
        </div>

        <div class="footerLinks">
            <a href="index.html"><img class="footerLogoResponsiv" src="img/logo-white.png"></a>
            <a href="datenschutz.html">Datenschutz</a> <span class="responsivStick">|</span>
            <a href="impressum.html">Impressum</a>
        </div>
    </footer>
    `;
    }
}

customElements.define('my-footer', FooterSwitch)
