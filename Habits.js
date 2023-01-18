const form = document.querySelector("#formHabits");
const nlwSetup = new NLWSetup(form);

const data = {
  workout: [
    "01-01",
    "01-02",
    "01-06",
    "01-07",
    "01-08",
    "01-09",
    "01-10",
    "01-11",
    "01-12",
  ],
  read: ["01-01", "01-03"],
  sleep: ["01-01", "01-02", "01-03", "01-04", "01-05"],
};

nlwSetup.setData(data);
nlwSetup.load();
