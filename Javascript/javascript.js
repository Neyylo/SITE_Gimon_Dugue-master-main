// Ici on a programmé l'heure.
function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  let timeElement = document.getElementById("time")
  requestAnimationFrame(updateTime)
  function updateTime() {
    const d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());
    let time = h + ":" + m + ":" + s;
    timeElement.innerHTML = time;
    requestAnimationFrame(updateTime);
  };


// Fonction pour changer le style
function changerStyle() {
  // Récupération de la feuille de style
  var styleFeuille = document.getElementById('style-feuille');
  // Vérifier l'état du style actuel
  if (styleFeuille.getAttribute('href') === '../Styles/style.css') {
      // Si le style actuel est le premier, changer vers le deuxième
      styleFeuille.setAttribute('href', '../Styles/style_alt.css');
  } else {
      // Sinon, changer vers le premier
      styleFeuille.setAttribute('href', '../Styles/style.css');
  
  }  
};

function randomFiche() {
  const OursPolaire = '../Content/Collection/Ours_Polaire.xhtml';
  const HarfangDesNeiges = '../Content/Collection/Harfang_des_neiges.xhtml';
  const Pangolin = '../Content/Collection/Pangolin_indien.xhtml';
  const RequinRenard = '../Content/Collection/Requin_renard.xhtml';
  var ficheArray = [OursPolaire, HarfangDesNeiges, Pangolin, RequinRenard];
  return ficheArray[Math.floor(Math.random() * ficheArray.length)];
};


function redirectToRandom() {
  let randomFicheUrl = randomFiche();
  window.location.href = randomFicheUrl;
};
  
function changeImage() {
  var images = ["./Images/Image_Accueil/Image_acceuill.jpeg", "./Images/Image_Accueil/LR-oiseaux-nicheurs-PC.jpg"];
  var currentIndex = 0;
  var img = document.getElementById("imageToShow");

  if (currentIndex === 0) {
    currentIndex = (currentIndex + 1) % images.length;
  } else if (currentIndex === 1) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }
  img.src = images[currentIndex]
};