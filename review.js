const output = document.getElementById("output");
const data = JSON.parse(localStorage.getItem("patientData"));

if (!data) {
  output.innerHTML = "<p>No data found.</p>";
} else {
  let allergiesHTML = "";

  if (data.allergies.length === 0) {
    allergiesHTML = "<p>No known allergies</p>";
  } else {
    allergiesHTML = "<ul>" +
      data.allergies.map(a => `<li>${a.name} — ${a.reaction}</li>`).join("") +
      "</ul>";
  }

  output.innerHTML = `
    <h2>Allergies</h2>
    ${allergiesHTML}

    <h2>Medical Conditions</h2>
    <p>${data.conditions.length ? data.conditions.join(", ") : "None selected"}</p>

    <h2>Other Medical History</h2>
    <p>${data.other || "No additional details."}</p>
  `;
}
