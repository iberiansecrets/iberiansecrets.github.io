//Fixing content menu during scrolling

function showMenu(){
    document.getElementById("MenuCampaignM").classList.toggle("d-none");
}

function showTeam(){
    document.getElementById("nosotros").classList.remove("d-none");
    document.getElementById("nJuegos").classList.add("d-none");
    document.getElementById("contacto").classList.add("d-none");
}

function showGames(){
    document.getElementById("nosotros").classList.add("d-none");
    document.getElementById("nJuegos").classList.remove("d-none");
    document.getElementById("contacto").classList.add("d-none");
}

function showContact(){
    document.getElementById("nosotros").classList.add("d-none");
    document.getElementById("nJuegos").classList.add("d-none");
    document.getElementById("contacto").classList.remove("d-none");
}

function LinkTree(){
    const url = "https://linktr.ee/iberiansecrets"; // Reemplaza con tu URL deseada
    window.open(url, "_blank");
}

function Instagram(){
    const url = "https://instagram.com/Iberiansecrets"; // Reemplaza con tu URL deseada
    window.open(url, "_blank");
}

function Youtube(){
    const url = "https://www.youtube.com/@IberianSecrets"; // Reemplaza con tu URL deseada
    window.open(url, "_blank");
}

function XTwitter(){
    const url = "https://x.com/Iberiansecrets"; // Reemplaza con tu URL deseada
    window.open(url, "_blank");
}

function TikTok(){
    const url = "https://tiktok.com/@iberiansecrets"; // Reemplaza con tu URL deseada
    window.open(url, "_blank");
}

function sendEmail() {
    const destinatario = "iberiansecrets@gmail.com";
    const asunto = "Consulta";
    
    const mailtoLink = 'mailto:${destinatario}?subject=${encodeURIComponent(asunto)}';
    window.location.href = mailtoLink;
    }
