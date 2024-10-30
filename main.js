let code = document.getElementById("code");
let button = document.getElementById("buttonAfiche");
// if (code) {
//   code.style.display = "none";
// }
function afficherCode() {
  if (code && button) {
    console.log(code.style);
    if (code.style.display === "none") {
      code.style.display = "block";
      button.textContent = "FERMER LE CODE";
    } else if (code.style.display === "block") {
      console.log(button);
      code.style.display = "none";
      button.textContent = "AFFICHER LE CODE";
    }
  }
}
