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
