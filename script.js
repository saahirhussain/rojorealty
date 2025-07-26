const apiBase = "https://nvp6bw1j38.execute-api.us-east-2.amazonaws.com/"; // replace with your Invoke URL

document.getElementById("createClientForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    clientName: document.getElementById("clientName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value
  };

  try {
    const res = await fetch(`${apiBase}/clients`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    document.getElementById("result").textContent = JSON.stringify(json, null, 2);
  } catch (err) {
    document.getElementById("result").textContent = "Error: " + err;
  }
});

document.getElementById("findClientForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const clientName = document.getElementById("searchName").value;

  try {
    const res = await fetch(`${apiBase}/clients?clientName=${encodeURIComponent(clientName)}`, {
      method: "GET"
    });
    const json = await res.json();
    document.getElementById("result").textContent = JSON.stringify(json, null, 2);
  } catch (err) {
    document.getElementById("result").textContent = "Error: " + err;
  }
});
