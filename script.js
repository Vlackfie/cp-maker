// Database for Courses and Professors
const courseData = {
    "Industrial Management & Financial Accounting": "GED-215",
    "Data Structures": "CSE-211",
    "Database Management Systems": "CSE-313"
};

const profData = {
    "Dr. Rezaul Haque": {
        desig: "Assistant Professor",
        dept: "Department of Business Administration"
    },
    "Prof. Md. Anwar Hussain": {
        desig: "Professor",
        dept: "Department of Computer Science and Engineering"
    },
    "Ms. Fatema Tuj Johora": {
        desig: "Lecturer",
        dept: "Department of Business Administration"
    }
};

function autoFillCourse() {
    const title = document.getElementById('in-course').value;
    document.getElementById('in-code').value = courseData[title] || "";
    updatePreview();
}

function autoFillProfessor() {
    const name = document.getElementById('in-prof-name').value;
    const desigInput = document.getElementById('in-prof-desig');
    const deptInput = document.getElementById('in-prof-dept');

    if (profData[name]) {
        desigInput.value = profData[name].desig;
        deptInput.value = profData[name].dept;
    } else {
        desigInput.value = "";
        deptInput.value = "";
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
        'in-student-id': 'out-student-id'
    };

    for (let inputId in mapping) {
        document.getElementById(mapping[inputId]).innerText = document.getElementById(inputId).value || "...";
    }

    const rawDate = document.getElementById('in-date').value;
    document.getElementById('out-date').innerText = formatDate(rawDate);
}
