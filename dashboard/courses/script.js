function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("menuOverlay");
    menu.classList.toggle("translate-x-full");
    overlay.classList.toggle("hidden");
}
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

// Get references to tabs and sections
const registeredTab = document.getElementById('registered-tab');
const requestedTab = document.getElementById('requested-tab');
const registeredSection = document.getElementById('registered-section');
const requestedSection = document.getElementById('requested-section');

// Add click event for Registered tab
registeredTab.addEventListener('click', () => {
    registeredSection.classList.remove('hidden');
    requestedSection.classList.add('hidden');
    registeredTab.classList.add('text-green-700', 'border-green-700');
    requestedTab.classList.remove('text-green-700', 'border-green-700');
    requestedTab.classList.add('text-gray-600');
});

// Add click event for Requested tab
requestedTab.addEventListener('click', () => {
    requestedSection.classList.remove('hidden');
    registeredSection.classList.add('hidden');
    requestedTab.classList.add('text-green-700', 'border-green-700');
    registeredTab.classList.remove('text-green-700', 'border-green-700');
    registeredTab.classList.add('text-gray-600');
});