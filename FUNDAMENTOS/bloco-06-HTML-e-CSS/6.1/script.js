let btns = document.getElementById("btn-submit");
let names = document.getElementById("names");
let emails = document.getElementById("emails");
let motivos = document.getElementById("motivos");
function alertSucces() {
  alert("Deu certo");
}
function alertFail() {
  alert("Dados Inválidos");
}
function teste() {
  if (
    names.value.length < 5 ||
    names.value.length > 40 ||
    emails.value.length < 10 ||
    emails.value.length > 50 ||
    motivos.value.length > 500
  ) {
    alertFail();
  } else {
    alertSucces();
  }
}
btns.addEventListener("click", teste);
