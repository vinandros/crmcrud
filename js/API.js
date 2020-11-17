const url = "http://localhost:4000/clientes";

export const newClient = async (client) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(client),
      headers: {
        "Content-type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

export const getClients = async () => {
  try {
    const response = await fetch(url);
    const clients = await response.json();
    return clients;
  } catch (error) {
    console.log(error);
  }
};

export const deleteClient = async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};
