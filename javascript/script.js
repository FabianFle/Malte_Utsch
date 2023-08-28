let workInfos = [];
let showInfoBig = [];


//=================================================================


async function renderInfos() {
    let response = await fetch('javascript/workInfos.json');
    workInfos = await response.json();

    onloadGenerateInfo();
}


function onloadGenerateInfo() {
    let infoDiv = document.getElementById('infos');
    infoDiv.innerHTML = '';

    for (let i = 0; i < workInfos.length; i++) {
        let infoForTheWork = workInfos[i];
        infoDiv.innerHTML += generateInfo(infoForTheWork, i);
    }
}


function openInfos(name, img, text) {
    let showInfoDiv = document.getElementById('showInfos');
    showInfoBig = { name, img, text };
    showInfoDiv.innerHTML = showInfos(name, img, text);
    document.getElementById('showInfos').classList.remove('d-none');

    if (window.innerWidth < 900) {
        showInfoDiv.scrollIntoView({ behavior: 'smooth' });
    } else {
        showInfoDiv.scrollIntoView({ behavior: 'smooth' });
    }

}


function closeBigInfo() {
    let info = document.getElementById('showInfos');
    info.innerHTML = '';
    info.classList.add('d-none');
}


function openResponsMenu() {
    document.getElementById('responsivHeader').classList.remove('d-none');
    document.getElementById('responsivBackgroundMenu').classList.remove('d-none');
    document.getElementById('headerMenuClose').classList.remove('d-none');
    document.getElementById('headerMenu').classList.add('d-none');
    document.body.style.overflow = 'hidden';
}

function CloseResponsMenu() {
    document.getElementById('responsivHeader').classList.add('d-none');
    document.getElementById('responsivBackgroundMenu').classList.add('d-none');
    document.getElementById('headerMenuClose').classList.add('d-none');
    document.getElementById('headerMenu').classList.remove('d-none');
    document.body.style.overflow = 'auto';
}