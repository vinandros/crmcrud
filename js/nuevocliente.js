import { showAlert } from "./funciones.js";
import { newClient } from "./API.js";

(function () {
  const form = document.querySelector("#formulario");
  form.addEventListener("submit", checkClient);
  function checkClient(e) {
    e.preventDefault();
    const name = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#telefono").value;
    const company = document.querySelector("#empresa").value;

    const client = {
      name,
      email,
      phone,
      company,
    };

    if (checkValues(client)) {
      showAlert("Todos los campos son obligatorios.");
      return;
    }

    newClient(client);
  }

  function checkValues(obj) {
    return !Object.values(obj).every((input) => input !== "");
  }
})();
