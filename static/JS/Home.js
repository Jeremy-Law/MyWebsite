function toProject(){
    window.location.href ="Projects.html"
}
function toHome(){
    window.location.href="Home.html"
}
function toAbout(){
    window.location.href="aboutMe.html"
}

const pButton = document.getElementById("toProjects")
pButton.addEventListener('click', toProject)

const aButton = document.getElementById("toAbout")
aButton.addEventListener('click', toAbout)

const hButton = document.getElementById("toHome")
hButton.addEventListener('click', toHome)
