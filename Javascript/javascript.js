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
  }