// listing my buttons with var names
//var isNotShown = true; //is something being shown?
//var showing = "none"; //what is being shown?
let pagesViewed = 0;


const removeButtons = () => {
  const genButton = document.getElementById("genInfo");
  const collectButton = document.getElementById("collect");
  const tradeButton = document.getElementById("tradeSale");
  const goButton = document.getElementById("go");
  const backButton = document.getElementById("backButton");
  const tempButton = document.getElementById("temps"); 
  
  genButton.classList.add("hidden");
  collectButton.classList.add("hidden");
  tradeButton.classList.add("hidden");
  goButton.classList.add("hidden");
  tempButton.classList.add("hidden");
  backButton.classList.remove("hidden"); 
}

const addButtons = () => {
  const genButton = document.getElementById("genInfo");
  const collectButton = document.getElementById("collect");
  const tradeButton = document.getElementById("tradeSale");
  const goButton = document.getElementById("go");
  const backButton = document.getElementById("backButton");
  const tempButton = document.getElementById("temps");

  genButton.classList.remove("hidden");
  collectButton.classList.remove("hidden");
  tradeButton.classList.remove("hidden");
  goButton.classList.remove("hidden");
  tempButton.classList.remove("hidden");
  backButton.classList.add("hidden");
}

const hideText = () => {
  const genText = document.getElementById("infoInfo");
  const collectText = document.getElementById("collectInfo");
  const goText = document.getElementById("goInfo");
  
  genText.classList.add("hidden");
  collectText.classList.add("hidden");
  goText.classList.add("hidden");
  document.getElementById("tradesText").classList.add("hidden");
  document.getElementById("saleText").classList.add("hidden");
}

const genClick = () => {
  const genButton = document.getElementById("genInfo");
  const genText = document.getElementById("infoInfo");
  const collectButton = document.getElementById("collect");
  const collectText = document.getElementById("collectInfo");
  const tradeButton = document.getElementById("tradeSale");
  const goButton = document.getElementById("go");
  const goText = document.getElementById("goInfo");
  const readDone = document.getElementById("readConfirm");

  isNotShown = genText.classList.contains("hidden");
  genButton.addEventListener("click", (event) => {
    genText.classList.remove("hidden");
    removeButtons();
    /*
    if (isNotShown === true) {
      genText.classList.remove("hidden");
      //showing = "gen";
      removeButtons();
      isNotShown = false;
      //} else if (showing != "gen") {
      //collectText.classList.add("hidden");
      //tradeText.classList.add("hidden");
      //goText.classList.add("hidden");
      //showing = "gen";
    } else {
      genText.classList.add("hidden");
      addButtons();
      isNotShown = true;
    } */
  })

  collectButton.addEventListener("click", (event) => {
    collectText.classList.remove("hidden");
    removeButtons();
  })

  tradeButton.addEventListener("click", (event) => {
    document.getElementById("tradesText").classList.remove("hidden");
    document.getElementById("saleText").classList.remove("hidden");
    removeButtons();
    pagesViewed = 1;
    readDone.classList.remove("hidden");
  })

  goButton.addEventListener("click", (event) => {
    goText.classList.remove("hidden");
    removeButtons();
  })
} 

const backToHome = () => {
  const backButton = document.getElementById("backButton");
  backButton.addEventListener("click", (event) => {
    addButtons();
    hideText();
  })
} 


document.addEventListener("DOMContentLoaded", (event) => {  
  try {
    genClick();
  } catch (e) {
    console.error(e);
    alert(e);
  }
  try {
    backToHome();
  } catch (e) {
    alert(e);
  }
});