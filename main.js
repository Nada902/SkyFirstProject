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

function searchRequests() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.request-card1');

    cards.forEach(card => {
        const name = card.querySelector('.card-header').textContent.toLowerCase();
        card.style.display = name.includes(input) ? 'block' : 'none';
    });
}

////////////////////////////////////////////
function adjustCardLayout() {
    var card = document.getElementById("responsive-card");

    if (window.innerWidth >= 768) {
      card.classList.add("flex-row");
      card.classList.remove("flex-column");
    } else {
      card.classList.add("flex-column");
      card.classList.remove("flex-row");
    }
  }

  window.onload = adjustCardLayout;
  window.onresize = adjustCardLayout;

////////////////////////////////////////////////
function searchRequest() {
    const input = document.getElementById('searchInpt').value.toLowerCase();
    const cards = document.querySelectorAll('.vacation-card');

    cards.forEach(card => {
        const name = card.querySelector('.empName').textContent.toLowerCase();
        card.style.display = name.includes(input) ? 'block' : 'none';
    });
}
////////////////////////////////////

function changePage(pageNumber) {
    // Hide pages
    document.querySelectorAll('.row[id^="page"]').forEach(page => {
        page.classList.add('d-none');
    });

    // Show selected page
    document.getElementById(`page${pageNumber}`).classList.remove('d-none');
}


document.addEventListener("DOMContentLoaded", function() {
    changePage(1); // Load page1 by default
});
///////////////////////////////////

function toggleSelectAll(pageId, selectAllCheckbox) {
    //Get checkboxes in specified page
    const checkboxes = document.querySelectorAll(`#${pageId} .request-checkbox`);
    
    // Show checkboxes and set them based on 'Select All' 
    checkboxes.forEach(checkbox => {
        checkbox.classList.remove('d-none');
        checkbox.checked = selectAllCheckbox.checked;
    });
}

function updateSelectAll(pageId) {
    // Get the 'Select All' checkbox for the page
    const selectAllCheckbox = document.getElementById(`selectAll${pageId.charAt(0).toUpperCase() + pageId.slice(1)}`);
    
    // Get all checkboxes in the specified page
    const checkboxes = document.querySelectorAll(`#${pageId} .request-checkbox`);
    
    // Check if all checkboxes are checked
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    
    // If all checkboxes are checked, check 'Select All' checkbox; else, uncheck it
    selectAllCheckbox.checked = allChecked;
}
