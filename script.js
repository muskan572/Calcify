document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");
  const buttons = document.querySelectorAll("button");

  let expression = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.innerText;

      if (value === "=") {
        try {
          expression = eval(expression);
          output.value = expression;
        } catch (error) {
          output.value = "Error";
          expression = "";
        }
        return;
      }
      //to clear 
      if (value === "AC") {
        expression = "";
        output.value = "";
        return;
      }

      expression += value;
      output.value = expression;
    });
  });
});
