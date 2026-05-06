function updatePreview() {
    // Map input IDs to their output counterparts
    const mapping = {
        'in-course': 'out-course',
        'in-code': 'out-code',
        'in-prof-name': 'out-prof-name',
        'in-prof-desig': 'out-prof-desig',
        'in-prof-dept': 'out-prof-dept',
        'in-student-name': 'out-student-name',
        'in-student-id': 'out-student-id',
        'in-date': 'out-date'
    };

    for (let inputId in mapping) {
        let outputId = mapping[inputId];
        let val = document.getElementById(inputId).value;
        
        if (val) {
            document.getElementById(outputId).innerText = val;
        }
    }
}