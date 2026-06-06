var titleBackgrounds = [
    "assets/bg/title/Glitch_BG_6_1000.gif",
    "assets/bg/title/Glitch_BG_9_1000.gif"
  ];
  
  var titleMusics = [
    "assets/audio/title/24.mp3",
    "assets/audio/title/36.mp3",
    "assets/audio/title/74.mp3",
    "assets/audio/title/77.mp3",
    "assets/audio/title/82.mp3",
    "assets/audio/title/88.mp3",
    "assets/audio/title/117.mp3"
  ];

var selectedBg = titleBackgrounds[Math.floor(Math.random() * titleBackgrounds.length)];
var selectedMusic = titleMusics[Math.floor(Math.random() * titleMusics.length)];
var titleAudio = null;

function applyRandomTitleAssets() {
    var titleScreen = document.getElementById("titleScreen");
    
    // 1. Applique le background aléatoire (en gardant tes filtres et ton pixelated)
    if (titleScreen) {
      titleScreen.style.backgroundImage = `linear-gradient(rgba(11, 11, 13, 0), rgba(11, 11, 13, 0)), url('${selectedBg}')`;
    }
  
    // 2. Prépare l'objet Audio
    titleAudio = new Audio(selectedMusic);
    titleAudio.loop = true;
    titleAudio.volume = 0.2;
  
    // musique dès que le joueur bouge la souris ou touche l'écran
    // (Obligatoire à cause des règles de sécurité des navigateurs)
    var startMusicOnInteraction = function() {
      if (titleAudio) {
        titleAudio.play().catch(function(error) {
          console.log("Lecture audio en attente d'un clic...");
        });
      }
      // Nettoyage des écouteurs pour éviter les lancements multiples
      document.removeEventListener('click', startMusicOnInteraction);
      document.removeEventListener('keydown', startMusicOnInteraction);
    };
  
    document.addEventListener('click', startMusicOnInteraction);
    document.addEventListener('keydown', startMusicOnInteraction);
  }
  
  function checkTitleScreenSave() {
    var saveExists = localStorage.getItem("gameDataSave");
    var continueBtn = document.getElementById("titleContinueBtn");
    
    if (!saveExists && continueBtn) {
      continueBtn.disabled = true;
    }
  }
  
  function titleScreenAction(choice) {
    var titleScreen = document.getElementById("titleScreen");
  
    if (choice === 'continue') {
      // On laisse le script charger ce qui est dans le localStorage (géré par ton bloc d'origine)
      var gamesave = JSON.parse(localStorage.getItem("gameDataSave"));
      var cardsave = JSON.parse(localStorage.getItem("purchasedCardsSave"));
      var achsave = JSON.parse(localStorage.getItem("unlockedAchievementsSave"));
  
      if (gamesave !== null && cardsave !== null) {
        gameData = gamesave;
        purchasedCards = cardsave;
        unlockedAchievements = achsave;
      }
  
      // On lance le jeu et on masque l'écran d'accueil
      stopTitleMusic();
      startGameInterface();
    } 
    else if (choice === 'upload') {
      // On simule un clic sur le bouton d'importation de fichier déjà présent dans tes Settings !
      var fileInput = document.getElementById("importFile");
      if (fileInput) {
        // On écoute le moment où le fichier est chargé avec succès pour masquer l'écran d'accueil
        fileInput.addEventListener('change', function() {
          // Note: Ta fonction importSave(event) d'origine contient un "location.reload()".
          // Au rechargement, le localStorage existera, donc le joueur pourra juste cliquer sur "Continue".
          if (titleScreen) titleScreen.classList.add("fade-out");
          stopTitleMusic();
        }, { once: true });
  
        fileInput.click();
      }
    }
  }
  
  function stopTitleMusic() {
    if (titleAudio) {
      titleAudio.pause();
      titleAudio.currentTime = 0; // Remet la piste à zéro
      titleAudio = null;          // Supprime l'objet de la mémoire pour être tranquille
    }
  }

  function startGameInterface() {
    var titleScreen = document.getElementById("titleScreen");
    
    updateButtons();
    updateUI();
    checkBackground();
  
    if (titleScreen) {
      titleScreen.classList.add("fade-out");
    }
  }

  applyRandomTitleAssets();
  checkTitleScreenSave();