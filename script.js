
const loonaMode = () => {
    const genButton = document.getElementById("genInfo");
    const interestButton = document.getElementById("interest");
    const kpopButton = document.getElementById("kpop");
    const resumeButton = document.getElementById("resume");
    const projButton = document.getElementById("project");
    const doc = document.getElementById("htmlTag")
    let loonaModeOn = doc.classList.contains("loonafied");
    const choerryButton = document.getElementById("choerry");
    choerryButton.addEventListener("click", (event) => {
        if (loonaModeOn == true) {
            let turnOff = confirm("ARE YOU SURE YOU WANT TO GO BACK?");
            if (turnOff == true) {  
                doc.classList.remove("loonafied");
                loonaModeOn = false;

                genButton.classList.remove("loonafied");
                interestButton.classList.remove("loonafied");
                kpopButton.classList.remove("loonafied");
                resumeButton.classList.remove("loonafied");
                projButton.classList.remove("loonafied");
            }
        } else {
            doc.classList.add("loonafied");
            loonaModeOn = true;

            genButton.classList.add("loonafied");
            interestButton.classList.add("loonafied");
            kpopButton.classList.add("loonafied");
            resumeButton.classList.add("loonafied");
            projButton.classList.add("loonafied");
    }})
} 



document.addEventListener("DOMContentLoaded", (event) => {  
    if (confirm("ARE YOU SURE YOU WANT TO LOAD THIS PAGE?") == false) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
    try {
        loonaMode();
    } catch (e) {
        console.error(e);
    }
});