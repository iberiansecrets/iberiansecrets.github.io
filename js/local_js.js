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

