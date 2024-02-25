let registeredUsers = [];
let selectedHospital = '';

function showLogin(hospitalName) {
    selectedHospital = hospitalName;

    document.getElementById('hospitalListPage').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('registerContainer').style.display = 'none';
    document.getElementById('mainPage').style.display = 'none';
}

function showRegister() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'block';
}

function register(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Example: Store the new username and password in the registeredUsers array
    registeredUsers.push({ username: newUsername, password: newPassword });

    alert(`Account registered successfully!\nUsername: ${newUsername}\nPassword: ${newPassword}`);

    showLogin(selectedHospital);
}

function login(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the entered username and password match any registered user
    const user = registeredUsers.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('mainPage').style.display = 'block';

        // Simulate fetching patient reports for the logged-in user
        const patientReports = getPatientReportsForUser(username);

        // Display patient reports
        displayPatientReports(patientReports);
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

// Function to simulate fetching patient reports for the logged-in user
function getPatientReportsForUser(username) {
    // Replace this with actual logic to fetch patient reports from the server
    // For illustration, let's use hardcoded reports
    const reports = {
        'user1': ['Report details for Patient 1...'],
        'user2': ['Report details for Patient 2...'],
        'user3': ['Report details for Patient 3...']
    };

    return reports[username] || [];
}

// Function to display patient reports
function displayPatientReports(reports) {
    const reportsList = document.getElementById('patientReportsList');
    reportsList.innerHTML = ''; // Clear previous reports

    if (reports.length > 0) {
        reports.forEach(report => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${report}</strong>`;
            reportsList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = 'No patient reports available.';
        reportsList.appendChild(listItem);
    }
}

function processPayment(event) {
    event.preventDefault();

    const patientName = document.getElementById('patient-name').value;
    const treatmentType = document.getElementById('treatment-type').value;
    const amount = document.getElementById('amount').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiration = document.getElementById('expiration').value;
    const cvv = document.getElementById('cvv').value;

    // Perform payment processing logic here
    // For demonstration purposes, let's just display an alert
    alert(`Payment successful!\nPatient Name: ${patientName}\nTreatment Type: ${treatmentType}\nAmount: $${amount}`);
}
