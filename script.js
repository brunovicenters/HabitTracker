const form = document.querySelector("#formHabits");
const nlwSetup = new NLWSetup(form);
const createDay = document.querySelector("#createDay");
const habits = document.querySelector(".habits");
const createHabit = document.querySelector("#createHabit");

const add = () => {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);

  const dayExists = nlwSetup.dayExists(today);

  if (!dayExists) {
    nlwSetup.addDay(today);
  } else {
    alert("Day already exist!");
  }
};

const save = () => {
  localStorage.setItem("habitsDone", JSON.stringify(nlwSetup.data));
};

createDay.addEventListener("click", add);

form.addEventListener("change", save);

// createHabit.addEventListener("click", () => {
//   const dataName = prompt("What is the name of the new habit?");
//   const emoji = prompt("What is the emoji of the new habit?");
//   const newHabit = document.createElement("div");
//   newHabit.classList.add("habit");
//   newHabit.setAttribute("data-name", `${dataName}`);
//   newHabit.innerHTML = `${emoji}`;
//   habits.append(newHabit);
// });

const data = JSON.parse(localStorage.getItem("habitsDone")) || {};
nlwSetup.setData(data);
nlwSetup.load();
