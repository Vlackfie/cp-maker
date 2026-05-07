// Database
const masterData = {
    "Dr. Rezaul Haque": {
        course: "Industrial Management & Financial Accounting",
        code: "GED-215",
        desig: "Assistant Professor",
        dept: "Department of Business Administration"
    },
    "Prof. Md. Anwar Hussain": {
        course: "Data Structures",
        code: "CSE-211",
        desig: "Professor",
        dept: "Department of Computer Science and Engineering"
    }
};

// Shows or Hides the specific assignment title input
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
    const profName = document.getElementById('in-prof-name').value;
    const data = masterData[profName];

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
        'in-course': 'out-course',
        'in-code': 'out-code',
        'in-prof-name': 'out-prof-name',
        'in-prof-desig': 'out-prof-desig',
        'in-prof-dept': 'out-prof-dept',
        'in-student-name': 'out-student-name',
        'in-student-id': 'out-student-id',
        'in-assign-title': 'out-assign-title'
    };

    for (let inputId in mapping) {
        const val = document.getElementById(inputId).value;
        document.getElementById(mapping[inputId]).innerText = val || "...";
    }

    const rawDate = document.getElementById('in-date').value;
    document.getElementById('out-date').innerText = formatDate(rawDate);
}
