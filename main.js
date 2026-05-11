var gameData = {
  chips: 10,

  cherryLvl: 0,
  cherryBonusAmount: 0,
  cherryCost: 10,

  lemonLvl: 0,
  lemonBonusAmount: 0,
  lemonCost: 200,

  bellLvl: 0,
  bellBonusAmount: 0,
  bellCost: 4000,

  horseshoeLvl: 0,
  horseshoeBonusAmount: 0,
  horseshoeCost: 80000,

  luckySevenLvl: 0,
  luckySevenBonusAmount: 0,
  luckySevenCost: 666,

  spinsLvl: 0,
  spinsBonusAmount: 0,
  spinsCost: 666,

  cogsLvl: 0,
  cogsCost: 250
};

var purchasedCards = [];

function formatScientifique(valeur) {
  if (valeur === 0) return "0.00e00";
  var exposant = Math.floor(Math.log10(valeur));
  var mantisse = valeur / Math.pow(10, exposant);
  return mantisse.toFixed(2) + "e" + exposant;
}

function formatNumber(valeur) {
  if (valeur >= 999999) {
    return formatScientifique(valeur);
  } else {
    return Number(valeur).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
  }
}

function openTab(tabName) {
  var i, tabContent, tabButtons;
  
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("active-tab");
  }
  
  tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active-btn");
  }
  
  document.getElementById(tabName).classList.add("active-tab");
  if (typeof event !== 'undefined' && event.currentTarget) {
    event.currentTarget.classList.add("active-btn");
  }
  
  var tabContainer = document.getElementById("tabContainer");
  if (tabName === 'casino') {
    tabContainer.className = "tab-container casino-tab";
  } else if (tabName === 'settings') {
    tabContainer.className = "tab-container settings-tab";
  }
}

function openSubTab(subTabName) {
  var i, subTabContent, subTabButtons;

  subTabContent = document.getElementsByClassName("subtab-content");
  for (i = 0; i < subTabContent.length; i++) {
    subTabContent[i].classList.remove("active-sub-tab");
  }

  subTabButtons = document.getElementsByClassName("subtab-button");
  for (i = 0; i < subTabButtons.length; i++) {
    subTabButtons[i].classList.remove("active-sub-btn");
  }

  document.getElementById(subTabName).classList.add("active-sub-tab");
  if (typeof event !== 'undefined' && event.currentTarget) {
    event.currentTarget.classList.add("active-sub-btn");
  }
}

var revenues = {
  cherryCps: 0,
  lemonCps: 0,
  bellCps: 0,
  horseshoeCps: 0,
  luckySevenCps: 0,
  spinsCps: 0,
  totalCps: 0
};

function chipsRevenues() {
  // cherry base : 1 cherry = 1 C/s
  revenues.cherryCps = (gameData.cherryBonusAmount + gameData.cherryLvl) * 1;

  // lemon base : 1 lemon = 10 C/s
  revenues.lemonCps = (gameData.lemonBonusAmount + gameData.lemonLvl) * 10;

  // Bell base : 1 bell = 100 C/s
  revenues.bellCps = (gameData.bellBonusAmount + gameData.bellLvl) * 100;

  // Horseshoe base : 1x = 1 000 C/s
  revenues.horseshoeCps = (gameData.horseshoeBonusAmount + gameData.horseshoeLvl) * 1000;

  // 7 base : 1x = 10 000 C/s
  revenues.luckySevenCps = (gameData.luckySevenBonusAmount + gameData.horseshoeLvl) * 10000;

  // Spins base : 1x = 100 000 C/s
  revenues.spinsCps = (gameData.spinsBonusAmount + gameData.spinsLvl) * 100000;

  revenues.totalCps = (revenues.cherryCps + revenues.lemonCps + revenues.bellCps + revenues.horseshoeCps + revenues.luckySevenCps + revenues.spinsCps)
}

function updateUI() {
  document.getElementById("currentChips").innerHTML = formatNumber(gameData.chips) + " Chips";
  
  document.getElementById("statChips").innerHTML = formatNumber(gameData.chips);
  document.getElementById("statLevel").innerHTML = formatNumber(gameData.chipsPerClick || 1);

  document.getElementById("chipsTotalProdText").textContent = "+" + revenues.totalCps;

  document.getElementById("cherryLeft").textContent = formatNumber(gameData.cherryLvl) + '+[' + formatNumber(gameData.cherryBonusAmount) + ']';
  document.getElementById("cherryRight").textContent = '(' + formatNumber(gameData.cherryCost) + ' Chips)';
  document.getElementById("cherryProdText").textContent = "+" + revenues.cherryCps + " Chips/s";

  document.getElementById("lemonLeft").textContent = formatNumber(gameData.lemonLvl) + '+[' + formatNumber(gameData.lemonBonusAmount) + ']';
  document.getElementById("lemonRight").textContent = '(' + formatNumber(gameData.lemonCost) + ' Chips)';
  document.getElementById("lemonProdText").textContent = "+" + revenues.lemonCps + " Chips/s";

  document.getElementById("bellLeft").textContent = formatNumber(gameData.bellLvl) + '+[' + formatNumber(gameData.bellBonusAmount) + ']';
  document.getElementById("bellRight").textContent = '(' + formatNumber(gameData.bellCost) + ' Chips)';
  document.getElementById("bellProdText").textContent = "+" + revenues.bellCps + " Chips/s";

  document.getElementById("horseshoeLeft").textContent = formatNumber(gameData.horseshoeLvl) + '+[' + formatNumber(gameData.horseshoeBonusAmount) + ']';
  document.getElementById("horseshoeRight").textContent = '(' + formatNumber(gameData.horseshoeCost) + ' Chips)';
  document.getElementById("horseshoeProdText").textContent = "+" + revenues.horseshoeCps + " Chips/s";

  document.getElementById("luckySevenLeft").textContent = formatNumber(gameData.luckySevenLvl) + '+[' + formatNumber(gameData.luckySevenBonusAmount) + ']';
  document.getElementById("luckySevenRight").textContent = '(' + formatNumber(gameData.luckySevenCost) + ' Chips)';
  document.getElementById("luckySevenProdText").textContent = "+" + revenues.luckySevenCps + " Chips/s";

  document.getElementById("spinsLeft").textContent = formatNumber(gameData.spinsLvl) + '+[' + formatNumber(gameData.spinsBonusAmount) + ']';
  document.getElementById("spinsRight").textContent = '(' + formatNumber(gameData.spinsCost) + ' Chips)';
  document.getElementById("spinsProdText").textContent = "+" + revenues.spinsCps + " Chips/s";

}

function updateButtons() {
  if (purchasedCards.includes('s2')) { document.getElementById("cogsSlot").style.display = "block"; }
}

// Casino hall buyers
function buyCherry() {
  if (gameData.chips >= gameData.cherryCost) {
    gameData.chips -= gameData.cherryCost;
    gameData.cherryLvl += 1;
    gameData.cherryCost *= 1.2;
    updateUI();
  }
}
function buyLemon() {
  if (gameData.chips >= gameData.lemonCost) {
    gameData.chips -= gameData.lemonCost;
    gameData.lemonLvl += 1;
    gameData.lemonCost *= 1.4;
    updateUI();
  }
}
function buyBell() {
  if (gameData.chips >= gameData.bellCost) {
    gameData.chips -= gameData.bellCost;
    gameData.bellLvl += 1;
    gameData.bellCost *= 1.6;
    updateUI();
  }
}
function buyHorseshoe() {
  if (gameData.chips >= gameData.horseshoeCost) {
    gameData.chips -= gameData.horseshoeCost;
    gameData.horseshoeLvl += 1;
    gameData.horseshoeCost *= 1.8;
    updateUI();
  }
}
function buyLuckySeven() {
  if (gameData.chips >= gameData.luckySevenCost) {
    gameData.chips -= gameData.luckySevenCost;
    gameData.luckySevenLvl += 1;
    gameData.luckySevenCost *= 2;
    updateUI();
  }
}
function buySpins() {
  if (gameData.chips >= gameData.spinsCost) {
    gameData.chips -= gameData.spinsCost;
    gameData.spinsLvl += 1;
    gameData.spinsCost *= 2.2;
    updateUI();
  }
}

function resetGame() {
  if (confirm("Do you want to reset your progression?")) {
    gameData = {
      chips: 10,
    
      cherryLvl: 0,
      cherryBonusAmount: 0,
      cherryCost: 10,
    
      lemonLvl: 0,
      lemonBonusAmount: 0,
      lemonCost: 200,
    
      bellLvl: 0,
      bellBonusAmount: 0,
      bellCost: 4000,
    
      horseshoeLvl: 0,
      horseshoeBonusAmount: 0,
      horseshoeCost: 80000,
    
      luckySevenLvl: 0,
      luckySevenBonusAmount: 0,
      luckySevenCost: 666,
    
      spinsLvl: 0,
      spinsBonusAmount: 0,
      spinsCost: 666,
    
      cogsLvl: 0,
      cogsCost: 250
    };

    purchasedCards = [];
    
    localStorage.removeItem("goldMinerSave");
    updateUI();
  }
}

// Boucles du jeu
var mainGameLoop = window.setInterval(function() {
  // adding chips
  chipsRevenues();
  gameData.chips += (revenues.totalCps) * 0.1; // divided by 10

  
  updateUI();
}, 100);

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("gameDataSave", JSON.stringify(gameData));
  localStorage.setItem("purchasedCardsSave", JSON.stringify(purchasedCards));
}, 15000);

// Chargement
var gamesave = JSON.parse(localStorage.getItem("gameDataSave"));
var cardsave = JSON.parse(localStorage.getItem("purchasedCardsSave"));
if (gamesave !== null && cardsave !== null) {
  gameData = gamesave;
  purchasedCards = cardsave;
}

function showCardDetails(cardId) {
  var card = getCardById(cardId);
  if (!card) return;

  var panelTitle = document.getElementById("selectedCardTitle");
  var panelImg = document.getElementById("selectedCardImg");
  var panelDesc = document.getElementById("selectedCardDesc");
  var panelBtn = document.getElementById("cardBuyBtn");

  if (panelTitle) {
    panelTitle.textContent = card.title;
    // On enregistre correctement l'ID de la carte dans le dataset du titre
    panelTitle.dataset.cardId = card.id; 
  }
  if (panelImg) {
    panelImg.src = card.img;
    panelImg.style.display = "block";
  }
  if (panelDesc) {
    panelDesc.textContent = card.desc;
  }

  if (panelBtn) {
    panelBtn.style.display = "block";
    if (purchasedCards.includes(cardId)) {
      panelBtn.textContent = "Owned";
    } else {
      panelBtn.textContent = "Buy (" + formatNumber(card.cost) + " Chips)";
    }
  }
}

function buySelectedCard() {
  var panelTitle = document.getElementById("selectedCardTitle");
  var activeCardId = panelTitle.dataset.cardId; // Récupère l'ID

  if (activeCardId && !purchasedCards.includes(activeCardId)) {
    var card = getCardById(activeCardId);
    if (!card || gameData.chips < card.cost) return; // Si la carte n'existe pas ou les fonds sont insuffisants
    
    gameData.chips -= card.cost;
    purchasedCards.push(activeCardId);

    var cardElement = document.querySelector(`[onclick*="${activeCardId}"]`);
    if (cardElement) {
      cardElement.classList.remove("locked-card");
    }

    updateUI();
    showCardDetails(activeCardId);
    
    updateButtons();
  }
}


updateButtons();
updateUI();