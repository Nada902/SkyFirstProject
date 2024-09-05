document.addEventListener('DOMContentLoaded', function () {
    // Get current page URL
    const currentPage = window.location.pathname.split("/").pop();
    
    // Select all nav-item elements
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        
        // Check if link href matches current page
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
        
        // Add click event to handle active state on click
        item.addEventListener('click', function () {
            navItems.forEach(navItem => navItem.querySelector('.nav-link').classList.remove('active'));
            link.classList.add('active');
        });
    });
});


////////////////////////////////////////////////////////////
// Sample data to be saved in localStorage
/*const defaultUserData = {
    name: "Ahmad Azmi",
    title: "Junior Accounting Officer",
    reportingTo: "Salwa Assem",
    corporateLevel: "Level 10",
    vacationRequests: 10,
    leaveRequests: 10
};

// Function to save data to localStorage
function saveUserData() {
    localStorage.setItem('userData', JSON.stringify(defaultUserData));
}

// Function to load data from localStorage
function loadUserData() {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
        const userData = JSON.parse(savedData);
        document.getElementById('userName').innerText = userData.name;
        document.getElementById('profileTitle').innerText = userData.title;
        document.getElementById('reportingTo').innerText = userData.reportingTo;
        document.getElementById('corporateLevel').innerText = userData.corporateLevel;
        document.getElementById('vacationRequests').innerText = userData.vacationRequests;
        document.getElementById('leaveRequests').innerText = userData.leaveRequests;
        document.getElementById('vacationRequestsCard').innerText = userData.vacationRequests;
        document.getElementById('leaveRequestsCard').innerText = userData.leaveRequests;
    } else {
        // Save default data if none exists
        saveUserData();
        loadUserData(); // Load the default data after saving
    }
}



// Load user data on page load
window.onload = loadUserData;
*/
/////////////////////////////////////////////

function searchRequests() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.request-card1');

    cards.forEach(card => {
        const name = card.querySelector('.card-header').textContent.toLowerCase();
        card.style.display = name.includes(input) ? 'block' : 'none';
    });
}