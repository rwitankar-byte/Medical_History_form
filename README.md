# Medical History Form Website  
A web-based medical history intake form built using **HTML**, **CSS**, and **JavaScript**, designed to collect a patient’s medical background and display a structured review summary before final submission.

---

## 📌 Project Overview
This project consists of a **two-page web application**:

1. **Page 1 – Medical Form (`index.html`)**  
   The patient fills out personal, medical, surgical, allergy, and family history details.

2. **Page 2 – Review Page (`review.html`)**  
   Displays only the *selected* conditions and *filled* inputs entered by the patient.

The form data is stored temporarily using **localStorage** and then retrieved on the review page.

---

## 📁 Project Structure
```
project/
│
├── index.html          # Main medical form
├── review.html         # Review summary page
│
├── style.css           # Styling for the form page
├── review.css          # Styling for the review page
│
├── form.js             # Collects form data & redirects to review page
├── review.js           # Loads & displays summary on review page
│
└── README.md           # Project documentation
```

---

## 🧩 Technologies Used
| Component | Technology |
|----------|------------|
| Structure | HTML5 |
| Styling | CSS3 |
| Logic & Data Handling | JavaScript |
| Temporary Data Storage | `localStorage` |

This project strictly uses features within the given **syllabus scope**:  
HTML tags, forms, tables, CSS selectors, box model, flexbox, grid, basic JS, events, and DOM manipulation.

---

## 🔧 How It Works

### **1. User fills the medical form (index.html)**
The form contains:
- Patient personal information  
- Insurance details  
- Doctor information  
- Medications table  
- Allergies section  
- Medical history (checkbox grid)  
- Surgical history (radio buttons)  
- Family history (large table)  
- Provider/doctor notes  

When the user clicks **Submit**, `form.js`:
- Reads all form inputs  
- Stores them in localStorage as a JSON object  
- Redirects the user to `review.html`

---

### **2. Review Page**
`review.js` reads the saved data and displays:

- Only **checked** medical conditions  
- Only **YES** surgeries  
- Only **filled** medication rows  
- Only **filled** allergy rows  
- Only family members with selected conditions or comments  
- All typed details (name, address, notes, etc.)

This page ensures the patient verifies the information before final submission.

---

## ▶️ How to Run the Project

1. Download/extract the project folder.  
2. Open **index.html** in any browser (Chrome recommended).  
3. Fill the form → click **Submit**  
4. You will be taken to **review.html**, where the summary appears.  

No server or backend is required.  
Everything runs locally using JavaScript.

---

## 📌 Features Implemented
- Clean and structured medical form  
- Responsive layout using Flexbox and CSS Grid  
- Formatted tables for medications and family history  
- Dynamic review output  
- No frameworks required  
- Works fully offline  
- Uses only syllabus-allowed HTML/CSS/JS topics  

---

## ⚠️ Known Limitations  
- Data is not permanently saved; stored only in `localStorage`  
- No backend or PDF export included yet  
- Review page is read-only  

These can be added later if needed.

---

## 👨‍💻 Author
Rwitankar Pal , Ankan Mondal , Dipendra Kumar Senapati  
Newton School of Technology, Pune  

---

## ✔️ License
This project is free to use for educational purposes.
