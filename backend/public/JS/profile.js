//send token to server for verification
fetch("/user/profile", {
  credentials: "include", //sends cookis
})
  .then((res) => {
    if (!res.ok) throw new Error();
    return res.json();
  })
  .then((data) => {
    document.body.style.display = "block";
    /* //Vulnurable to XSS
    document.getElementById("profileData").innerHTML = `
        <p>ID: ${data.id}</p>
        <p>Username: ${data.username}</p>
        <p>Role:${data.role}</p>
        <p>Active: ${data.active}</p>
      `;
      */
    //Secure: Treate everything as plain text(trust no one)
    const container = document.getElementById("profileData");
    container.innerHTML = ""; //clears first

    const idP = document.createElement("p");
    idP.textContent = "ID: " + data.id;

    const userP = document.createElement("p");
    userP.textContent = "Username: " + data.username;

    const roleP = document.createElement("p");
    roleP.textContent = "Role: " + data.role;

    container.appendChild(idP);
    container.appendChild(userP);
    container.appendChild(roleP);
  })

  .catch((err) => {
    alert("Session expired. Please login again.");
    window.location.href = "login.html";
  });

document.getElementById("logoutBtn").addEventListener("click", async () => {
  try {
    const res = await fetch("/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    if (res.ok) {
      alert(data.message);
      window.location.href = "login.html";
    } else {
      alert("Logout failed");
    }
  } catch (err) {
    alert("Server might be down");
  }
});
