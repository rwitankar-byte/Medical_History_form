

document.getElementById("medicalForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop the page from refreshing

    // =========================
    // PATIENT INFO
    // =========================
    const patientInfoSection = document.querySelectorAll(".section")[0];
    const nameInput = patientInfoSection.querySelectorAll("input")[0].value;
    const dobInput = patientInfoSection.querySelectorAll("input")[1].value;
    const addressInput = patientInfoSection.querySelectorAll("input")[2].value;

    // =========================
    // MEDICATIONS
    // =========================
    const medicationRows = document.querySelectorAll(".medication-table tbody tr");
    const medications = [];

    medicationRows.forEach(row => {
        const inputs = row.querySelectorAll("input");
        const med = {
            name: inputs[0].value,
            dose: inputs[1].value,
            freq: inputs[2].value,
            purpose: inputs[3].value
        };

        // Only push NON-empty rows
        if (med.name || med.dose || med.freq || med.purpose) {
            medications.push(med);
        }
    });

    // =========================
    // ALLERGIES
    // =========================
    const allergyRows = document.querySelectorAll("#allergyTable .allergy-row");
    const allergies = [];
    allergyRows.forEach(row => {
        const inputs = row.querySelectorAll("input");
        if (inputs[0].value || inputs[1].value) {
            allergies.push({
                name: inputs[0].value,
                react: inputs[1].value
            });
        }
    });

    // =========================
    // MEDICAL HISTORY (checkboxes)
    // =========================
    const medicalHistory = [];
    document.querySelectorAll(".medical-history-columns input:checked").forEach(cb => {
        medicalHistory.push(cb.parentElement.innerText.trim());
    });

    // =========================
    // OTHER HISTORY
    // =========================
    const otherHistory = document.querySelector('textarea[placeholder="Enter additional history..."]').value;

    // =========================
    // SURGICAL HISTORY
    // YES only
    // =========================
    const surgeryLabels = document.querySelectorAll(".surgery-label");
    const surgeryData = {};

    surgeryLabels.forEach(label => {
        const name = label.innerText.trim();
        const radios = label.nextElementSibling.parentElement.querySelectorAll(`input[name="${name.replace(/ /g, "_")}"]`);

        const radioYes = document.querySelector(`input[name="${name.replace(/ /g, "_")}"][value="Yes"]`);
        const radioNo = document.querySelector(`input[name="${name.replace(/ /g, "_")}"][value="No"]`);

        if (radioYes && radioYes.checked) {
            surgeryData[name] = "Yes";
        }
    });

    // =========================
    // FAMILY HISTORY
    // =========================
    const familyHistory = {};
    const familyRows = document.querySelectorAll(".family-table tbody tr");

    familyRows.forEach(row => {
        const cells = row.querySelectorAll("td");
        const member = cells[0].innerText;

        const aliveYes = cells[1].querySelector('input[value="Y"]').checked;
        const aliveNo = cells[1].querySelector('input[value="N"]').checked;

        const conditions = [];
        for (let i = 2; i < 20; i++) {
            if (cells[i].querySelector("input") && cells[i].querySelector("input").checked) {
                const heading = document.querySelector(`.family-table thead th:nth-child(${i + 1})`).innerText;
                conditions.push(heading);
            }
        }

        const comments = cells[20].querySelector("input").value;

        familyHistory[member] = {
            alive: aliveYes ? "Y" : aliveNo ? "N" : "",
            conditions,
            comments
        };
    });

    // =========================
    // DOCTOR ADVICE
    // =========================
    const adviceNotes = document.querySelector('textarea').value;

    // =========================
    // FINAL OBJECT
    // =========================
    const formData = {
        name: nameInput,
        dob: dobInput,
        address: addressInput,
        medications,
        allergies,
        medicalHistory,
        otherHistory,
        surgery: surgeryData,
        familyHistory,
        advice: adviceNotes
    };

    // SAVE TO STORAGE
    localStorage.setItem("formData", JSON.stringify(formData));

    // REDIRECT TO REVIEW PAGE
    window.location.href = "review.html";
});
