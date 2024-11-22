function openModal(name, program, skills, level, Term, Duration, staff) {
    // Set the modal content dynamically
    document.getElementById("modalTitle").textContent = `${name} - ${program}`;
    document.getElementById("modalContent").innerHTML = `
        <strong>Course Summary:</strong><br> ${program}<br>
        <strong>Skill Set:</strong><br> ${skills}<br>
        <strong>Program:</strong><br> ${program}<br>
        <strong>Term:</strong><br> ${Term}<br>  
        <strong>Level:</strong><br> ${level}<br>
        <strong>Duration:</strong><br> ${Duration}<br>
        <strong>Staff:</strong><br> ${staff}
    `;
    // Show the modal
    document.getElementById("infoModal").classList.remove("hidden");
    document.getElementById("infoModal").classList.add("flex");
}

function closeModal() {
    document.getElementById("infoModal").classList.add("hidden");
    document.getElementById("infoModal").classList.remove("flex");
}