function openSignInModal() {
    const signInModal = document.getElementById('signInModal');
    if (signInModal) {
        signInModal.classList.remove('hidden');
    }
}

function closeSignInModal() {
    const signInModal = document.getElementById('signInModal');
    if (signInModal) {
        signInModal.classList.add('hidden');
    }
}

function openSignUpModal() {
    const signInModal = document.getElementById('signInModal');
    if (signInModal) {
        signInModal.classList.add('hidden');
    }

    // Create the sign-up form elements dynamically to match the hi-fi design
    const signUpFormHtml = `
        <div id="signUpModal" class="modal-content bg-white p-8 rounded-lg w-[90%] max-w-lg">
            <span class="close text-black text-2xl cursor-pointer" onclick="closeSignUpModal()">&times;</span>
            <h2 class="text-2xl font-bold mb-4">Welcome to PartnerSync</h2>
            <p class="mb-4">Please select one of the groups that describe you</p>
            <div class="flex gap-4">
                <div class="w-full bg-[#9ABB50] p-4 rounded-lg shadow-md text-left">
                    <button onclick="openFacultyForm()" class="bg-[#9ABB50] text-black px-4 py-2 rounded w-full text-left font-bold">Faculty</button>
                    <p class="text-sm mt-2">Currently a faculty or educator at Algonquin College. Looking for a partner to work with my students.</p>
                </div>
                <div class="w-full bg-[#9ABB50] p-4 rounded-lg shadow-md text-left">
                    <button onclick="openPartnerForm()" class="bg-[#9ABB50] text-black px-4 py-2 rounded w-full text-left font-bold">Partner</button>
                    <p class="text-sm mt-2">Looking to improve your business or organization by collaborating with highly qualified academic students.</p>
                </div>
            </div>
        </div>
    `;

    const modalContainer = document.createElement('div');
    modalContainer.id = 'signUpModalContainer';
    modalContainer.className = 'modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50';
    modalContainer.innerHTML = signUpFormHtml;
    document.body.appendChild(modalContainer);
}

function closeSignUpModal() {
    const signUpModal = document.getElementById('signUpModalContainer');
    if (signUpModal) {
        signUpModal.remove();
    }
}

function openFacultyForm() {
    closeSignUpModal();

    // Create faculty sign-up form
    const facultyFormHtml = `
        <div id="facultySignUpModal" class="modal-content bg-white p-8 rounded-lg w-[90%] max-w-lg">
            <span class="close text-black text-2xl cursor-pointer" onclick="closeFacultyForm()">&times;</span>
            <h2 class="text-2xl font-bold mb-4">Create your account (Faculty)</h2>
            <form class="flex flex-col gap-4">
                <input type="text" placeholder="Your Name" class="border p-2 rounded">
                <input type="text" placeholder="Course" class="border p-2 rounded">
                <input type="text" placeholder="Program" class="border p-2 rounded">
                <input type="email" placeholder="Email" class="border p-2 rounded">
                <button type="submit" class="bg-[#EAC117] text-white px-4 py-2 rounded">Create</button>
            </form>
        </div>
    `;

    const modalContainer = document.createElement('div');
    modalContainer.id = 'facultySignUpModalContainer';
    modalContainer.className = 'modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50';
    modalContainer.innerHTML = facultyFormHtml;
    document.body.appendChild(modalContainer);
}

function closeFacultyForm() {
    const facultySignUpModal = document.getElementById('facultySignUpModalContainer');
    if (facultySignUpModal) {
        facultySignUpModal.remove();
    }
}

function openPartnerForm() {
    closeSignUpModal();

    // Create partner sign-up form
    const partnerFormHtml = `
        <div id="partnerSignUpModal" class="modal-content bg-white p-8 rounded-lg w-[90%] max-w-lg">
            <span class="close text-black text-2xl cursor-pointer" onclick="closePartnerForm()">&times;</span>
            <h2 class="text-2xl font-bold mb-4">Create your account (Partner)</h2>
            <form class="flex flex-col gap-4">
                <input type="text" placeholder="Organization Name" class="border p-2 rounded">
                <input type="text" placeholder="Your Name" class="border p-2 rounded">
                <input type="email" placeholder="Email" class="border p-2 rounded">
                <button type="submit" class="bg-[#EAC117] text-white px-4 py-2 rounded">Create</button>
            </form>
        </div>
    `;

    const modalContainer = document.createElement('div');
    modalContainer.id = 'partnerSignUpModalContainer';
    modalContainer.className = 'modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50';
    modalContainer.innerHTML = partnerFormHtml;
    document.body.appendChild(modalContainer);
}

function closePartnerForm() {
    const partnerSignUpModal = document.getElementById('partnerSignUpModalContainer');
    if (partnerSignUpModal) {
        partnerSignUpModal.remove();
    }
}
