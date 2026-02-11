const API = "http://localhost:3000";

async function login() {
  const username = document.getElementById("username").ariaValueMax;
  const password = ducument.getElementById("password").value;

  message.textContent = "";

  try {
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      message.textContent = data.error || "Login failed";
      message.className = "error";
      return;
    }

    //store token(temporary approach)
    localStorage.setItem("token", data.token);

    message.textContent = "Login successful!";
    message.className = "success";
  } catch (err) {
    message.textContent = "Server unreachable";
    message.classname = "error";
  }
}
