
// Get the form element
const form = document.getElementById('questionaireForm');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the values from the form fields
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const gradeLevel = document.getElementById('option').value;
    const favoriteSport = document.querySelector('input[name="favSport"]:checked').value;

    // Create a formatted string to display the data
    const formDataString = `
        <strong>First Name:</strong> ${firstName}<br>
        <strong>Last Name:</strong> ${lastName}<br>
        <strong>Grade Level:</strong> ${gradeLevel}<br>
        <strong>Favorite Sport:</strong> ${favoriteSport}<br>
    `;

    // Display the data on the webpage
    const displaySection = document.getElementById('displayData');
    const dataOutput = document.getElementById('dataOutput');

    // Show the display section and update the content
    displaySection.style.display = 'block';
    dataOutput.innerHTML = formDataString;
});