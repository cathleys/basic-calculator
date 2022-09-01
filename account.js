// html with name attributes will have their value passed on when click event fires.
// defining the value of each button pressed is the argument passed as the result.
// form.displayScreen.value are names in the form elements and that mirrors whatever button pressed.

function calc(result) {
  form.displayScreen.value = form.displayScreen.value + result;
}
