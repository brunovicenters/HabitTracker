const form = document.querySelector("#formHabits");
const nlwSetup = new NLWSetup(form);
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

createHabit.addEventListener("click", add);

form.addEventListener("change", save);

const data = JSON.parse(localStorage.getItem("habitsDone")) || {};
nlwSetup.setData(data);
nlwSetup.load();
