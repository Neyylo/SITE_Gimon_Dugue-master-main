//Nolan Dugué et Elliot Gimon



//Nolan

//Ici on a programmé l'heure en faisant en sorte qu'il s'actualise seul sur le site.
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

//Nolan
//Fonction pour changer le style
function changerStyle() {
  //Récupération de la feuille de style
  var styleFeuille = document.getElementById('style-feuille');
  
  if (styleFeuille.getAttribute('href') === '../Styles/style.css') {
      styleFeuille.setAttribute('href', '../Styles/style_alt.css');
  } else {
      styleFeuille.setAttribute('href', '../Styles/style.css');
  
  }  
};

//Nolan
//On notes les chemins puis on les mets dans un tableau pour prendre au hasard après.
function randomFiche() {
  const OursPolaire = '../Content/Collection/Ours_Polaire.xhtml';
  const HarfangDesNeiges = '../Content/Collection/Harfang_des_neiges.xhtml';
  const Pangolin = '../Content/Collection/Pangolin_indien.xhtml';
  const RequinRenard = '../Content/Collection/Requin_renard.xhtml';
  var ficheArray = [OursPolaire, HarfangDesNeiges, Pangolin, RequinRenard];
  return ficheArray[Math.floor(Math.random() * ficheArray.length)];
};

//Nolan
//On se sert de la fonction du dessus pour la concretiser
function redirectToRandom() {
  let randomFicheUrl = randomFiche();
  window.location.href = randomFicheUrl;
};

//Nolan
//On fait simplement en sorte que l'mage soit cliquable et que ça change. currentIndex est a l'exterieur sinon on ne pourrais pas revenir sur la premiere images.
var images = ["./Images/Image_Accueil/Image_acceuill.jpeg", "./Images/Image_Accueil/LR-oiseaux-nicheurs-PC.jpg"];
var currentIndex = 0;
function changeImage() {
  var img = document.getElementById("imageToShow");

  if (currentIndex === 0) {
    currentIndex = (currentIndex + 1) % images.length;
  } else if (currentIndex === 1) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }
  img.src = images[currentIndex]
};
//Nolan et Elliot
function validateAnimalName() {
  var animalNameInput = document.getElementById("Animal-name");
  var animalNameError = document.getElementById("animalNameError");
  var animalName = animalNameInput.value.trim();

  if (animalName === "") {
    animalNameError.textContent = "Le nom de l'animal est requis";
    animalNameInput.classList.add("error");
  } else {
    animalNameError.textContent = "";
    animalNameInput.classList.remove("error");
  }
};
//Nolan et Elliot
function validateVulnerability() {
  var vulnerabilityError = document.getElementById("vulnerabilityError");
  var radios = document.querySelectorAll('input[name="Vulnerability"]');
  var checked = false;

  radios.forEach(function(radio) {
    if (radio.checked) {
      checked = true;
    }
  });

  if (!checked) {
    vulnerabilityError.textContent = "Veuillez sélectionner un rang de vulnérabilité";
  } else {
    vulnerabilityError.textContent = "";
  }
};
//Nolan et Elliot
function validateForm() {
  validateAnimalName();
  validateVulnerability();
  //Ajoute d'autres fonctions de validation ici si nécessaire

  //Empêche la soumission du formulaire si des erreurs sont présentes
  var errors = document.querySelectorAll('.error');
  if (errors.length > 0) {
    alert("Veuillez corriger les erreurs dans le formulaire avant de le soumettre.");
  } else {
    document.getElementById("myForm").submit();
  }
};
//Nolan et Elliot
function showSummary() {
  
  var animalName = document.getElementById("Animal-name").value;
  var vulnerability = document.querySelector('input[name="Vulnerability"]:checked').id;
  var mapImg = document.getElementById("map-img").value;

  var summary = "<p>Nom de l'animal : " + animalName + "</p>";
  summary += "<p>Rang de vulnérabilité : " + vulnerability + "</p>";
  summary += "<p>Image de sa localisation : " + mapImg + "</p>";

  document.getElementById("summary").innerHTML = summary;
};

