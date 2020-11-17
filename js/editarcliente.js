import { getClientById, updateClient } from "./API.js";
import { showAlert } from "./funciones.js";
(async function () {
  const nameInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const phoneInput = document.querySelector("#telefono");
  const companyInput = document.querySelector("#empresa");
  const idInput = document.querySelector("#id");
  document.addEventListener("DOMContentLoaded", async () => {
    const urlParameter = new URLSearchParams(window.location.search);

    const idClient = parseInt(urlParameter.get("id"));
    const client = await getClientById(idClient);
    showClient(client);

    const form = document.querySelector("#formulario");
    form.addEventListener("submit", checkClient);
  });

  function showClient(client) {
    const { name, phone, id, company, email } = client;
    nameInput.value = name;
    phoneInput.value = phone;
    idInput.value = id;
    companyInput.value = company;
    emailInput.value = email;
  }

  function checkClient(e) {
    e.preventDefault();

    const client = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      company: companyInput.value,
      id: parseInt(idInput.value),
    };
    if (checkValues(client)) {
      showAlert("Todos los campos son obligatorios.");
      return;
    }
    updateClient(client);
  }

  function checkValues(obj) {
    return !Object.values(obj).every((input) => input !== "");
  }
})();
