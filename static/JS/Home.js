function toProject(){

}
function toHome(){

}
function toAbout(){

}

const pButton = document.getElementById("toProjects")
pButton.addEventListener('click', toProject())

const aButton = document.getElementById("toAbout")
aButton.addEventListener('click', toAbout())

const hButton = document.getElementById("toHome")
hButton.addEventListener('click', toHome)
