// Function to display member details
function showMemberDetails(name, position, description, image) {
    var modal = document.getElementById("memberModal");
    var detailsContainer = document.getElementById("memberDetails");

    // Update the HTML to display the member's details
    detailsContainer.innerHTML = `
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
        <p>${position}</p>
        <p>${description}</p>
    `;

    // Show the modal
    modal.style.display = "block";

    // Add event listener to close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

// Function to handle slideshow
var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    showSlides(); // Start slideshow when the DOM content is loaded
});

// Function to navigate slideshow
function plusSlides(n) {
    showSlides(slideIndex += n);
}
var isPaused = false;
var timer; // Variable to store the timer ID

function togglePause() {
    var pauseButton = document.getElementById("pauseButton");

    // Toggle the isPaused variable
    isPaused = !isPaused;

    // Change the button text based on the state
    if (isPaused) {
        pauseButton.textContent = "Resume";
        clearTimeout(timer); // Clear the timer to pause slideshow
    } else {
        pauseButton.textContent = "Pause";
        showSlides(); // Resume slideshow
    }
}

// Function to handle slideshow
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    // Check if slideshow is not paused, then continue
    if (!isPaused) {
        timer = setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
}

// Call showSlides initially to start the slideshow
showSlides();



// Event listener for form submission
document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for reaching out! We will get back to you soon.');
        });
    }
});
document.getElementById('donate-button').addEventListener('click', function() {
    // Redirect to the donations page
    window.location.href = 'Donate.html';
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Clear previous error messages
  document.querySelectorAll('.error').forEach(function(error) {
    error.textContent = '';
  });
  
  // Retrieve form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  // Validate name
  if (name.trim() === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    return;
  }
  
  // Validate email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Invalid email address';
    return;
  }
  
  // Validate message
  if (message.trim() === '') {
    document.getElementById('messageError').textContent = 'Message is required';
    return;
  }
  
  // If all validations pass, you can submit the form
  // For this example, let's just log the form data
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
});