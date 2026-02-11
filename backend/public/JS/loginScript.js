document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // stop page refresh

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", //allow browser to accept cookie
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      window.location.href = "profile.html";
    } else {
      alert(data.error || "Login failed. Please check your credentials");
    }
  } catch (err) {
    console.log("Login error");
    alert("Check your connection. The server might be down." + err.message);
  }
});
