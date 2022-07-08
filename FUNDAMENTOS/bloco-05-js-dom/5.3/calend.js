function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}
function createDays() {
  let ull = document.getElementById("days");
  let decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const li = document.createElement("li");
    li.classList.add("day");
    if (
      decemberDaysList[index] === 24 ||
      decemberDaysList[index] === 25 ||
      decemberDaysList[index] === 31
    ) {
      li.classList.add("holiday");
    }
    if (
      decemberDaysList[index] === 4 ||
      decemberDaysList[index] === 11 ||
      decemberDaysList[index] === 18 ||
      decemberDaysList[index] === 25
    ) {
      li.classList.add("friday");
    }
    li.innerHTML = decemberDaysList[index];
    ull.appendChild(li);
  }
}
function createButton() {
  let button = document.createElement("button");
  button.innerHTML = "Feriados";
  button.id = "btn-holiday";
  document.getElementsByClassName("buttons-container")[0].appendChild(button);
}
function mudarCorHoliday() {
  let holis = document.getElementsByClassName("holiday");
  for (let index = 0; index < holis.length; index += 1) {
    if (holis[index].style.backgroundColor === "green") {
      holis[index].style.backgroundColor = "transparent";
      holis[index].style.color = "#777";
    } else {
      holis[index].style.backgroundColor = "green";
      holis[index].style.color = "white";
    }
  }
}
function fridaybutton() {
  let butao = document.createElement("button");
  butao.innerHTML = "Sexta-feira";
  butao.id = "btn-friday";
  document.getElementsByClassName("buttons-container")[0].appendChild(butao);
}
function mudarCorfriday() {
  let frids = document.getElementsByClassName("friday");
  for (let index = 0; index < frids.length; index += 1) {
    if (frids[index].style.backgroundColor === "blue") {
      frids[index].style.backgroundColor = "transparent";
      frids[index].style.color = "#777";
    } else {
      frids[index].style.backgroundColor = "blue";
      frids[index].style.color = "white";
    }
  }
}
function zoom(event) {
  if (event.target.style.fontSize === "30px") {
    event.target.style.fontSize = "20px";
  } else {
    event.target.style.fontSize = "30px";
  }
}
function createTask(string) {
  let task = document.createElement("span");
  task.innerHTML = string;
  document.getElementsByClassName("my-tasks")[0].appendChild(task);
}
function legendaTask(cor) {
  let legend = document.createElement("div");
  legend.style.backgroundColor = cor;
  legend.classList.add("task");
  document.getElementsByClassName("my-tasks")[0].appendChild(legend);
}
function taskSelect(events) {
  let taskC = events.target;
  if (taskC.classList.value === "task selected") {
    events.target.classList = "task";
  } else {
    taskC.classList.add("selected");
    taskC.style.margin = "10px";
  }
}
createDaysOfTheWeek();
createDays();
createButton();
document
  .getElementsByClassName("buttons-container")[0]
  .firstElementChild.addEventListener("click", mudarCorHoliday);
fridaybutton();
document
  .getElementsByClassName("buttons-container")[0]
  .lastElementChild.addEventListener("click", mudarCorfriday);
let dias = document.getElementsByClassName("day");
for (let index = 0; index < dias.length; index += 1) {
  dias[index].addEventListener("mouseover", zoom);
  dias[index].addEventListener("mouseout", zoom);
}
createTask("dar banho no macaco");
legendaTask("purple");
for (
  let index = 0;
  index < document.getElementsByClassName("task").length;
  index += 1
) {
  document
    .getElementsByClassName("task")[0]
    .addEventListener("click", taskSelect);
}
