const masterData = {
    "Abu Jafar Md Jakaria": {
        course: "Compitive Programming Lab",
        code: "CSE 200",
        desig: "Senior Lecturer",
        dept: "Department Of Computer Science and Engineering"
    },
    "Samia Rahman Rima (DBMS)": {
        course: "Database Management System",
        code: "CSE 223",
        desig: "Lecturer",
        dept: "Department Of Computer Science and Engineering"
    },
    "Samia Rahman Rima (DBMS Lab)": {
        course: "Database Management System Lab",
        code: "CSE 224",
        desig: "Lecturer",
        dept: "Department Of Computer Science and Engineering"
    },
    "Sadman Sakib (Microprocessor)": {
        course: "Microprocessor & Interfacing",
        code: "CSE 237",
        desig: "Lecturer",
        dept: "Department of Electrical & Electronic Engineering"
    },
    "Sadman Sakib (Microprocessor Lab)": {
        course: "Microprocessor & Interfacing Lab",
        code: "CSE 238",
        desig: "Lecturer",
        dept: "Department of Electrical & Electronic Engineering"
    },
    "Farhana Akter": {
        course: "Geometry & Vector Analysis",
        code: "MAT 216",
        desig: "Lecturer",
        dept: "Department Of Computer Science and Engineering"
    }
};

function toggleTitleInput() {
    const isChecked = document.getElementById('check-title').checked;
    const inputField = document.getElementById('in-assign-title');
    const outputField = document.getElementById('out-assign-title');
    
    inputField.style.display = isChecked ? "block" : "none";
    
    if (!isChecked) {
        inputField.value = "";
        outputField.innerText = "";
    }
    updatePreview();
}

function autoFillAll() {
    const profKey = document.getElementById('in-prof-name').value;
    const data = masterData[profKey];

    if (data) {
        document.getElementById('in-course').value = data.course;
        document.getElementById('in-code').value = data.code;
        document.getElementById('in-prof-desig').value = data.desig;
        document.getElementById('in-prof-dept').value = data.dept;
    }
    updatePreview();
}

function formatDate(dateString) {
    if (!dateString) return "__________________";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${day} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function updatePreview() {
    const mapping = {
        'in-doc-type': 'out-doc-type',
        'in-course': 'out-course',
        'in-code': 'out-code',
        'in-prof-desig': 'out-prof-desig',
        'in-prof-dept': 'out-prof-dept',
        'in-student-name': 'out-student-name',
        'in-student-id': 'out-student-id',
        'in-assign-title': 'out-assign-title'
    };

    const rawProfName = document.getElementById('in-prof-name').value;
    document.getElementById('out-prof-name').innerText = rawProfName.split(' (')[0] || "...";

    for (let inputId in mapping) {
        const val = document.getElementById(inputId).value;
        document.getElementById(mapping[inputId]).innerText = val || "...";
    }

    const rawDate = document.getElementById('in-date').value;
    document.getElementById('out-date').innerText = formatDate(rawDate);
}
