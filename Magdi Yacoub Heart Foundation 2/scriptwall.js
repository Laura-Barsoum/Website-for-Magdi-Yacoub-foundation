// Function to add a sticky note
function addStickyNote() {
    // Get the message from the textarea
    const message = document.getElementById('message').value;

    // Create a new sticky note element
    const stickyNote = document.createElement('div');
    stickyNote.classList.add('sticky-note');
    stickyNote.textContent = message;

    // Generate a random color excluding black
    const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Apply the random color to the sticky note
    stickyNote.style.backgroundColor = randomColor;

    // Set initial position randomly within the container
    const containerWidth = document.getElementById('sticky-container').offsetWidth;
    const containerHeight = document.getElementById('sticky-container').offsetHeight;
    stickyNote.style.left = Math.floor(Math.random() * (containerWidth - 200)) + 'px';
    stickyNote.style.top = Math.floor(Math.random() * (containerHeight - 150)) + 'px';

    // Make the sticky note draggable
    makeDraggable(stickyNote);

    // Append the sticky note to the container
    document.getElementById('sticky-container').appendChild(stickyNote);
}


// Function to make an element draggable
function makeDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + 'px';
        element.style.left = (element.offsetLeft - pos1) + 'px';
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Ensure DOM content is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Attach event listener to the button for adding sticky notes
    const addButton = document.getElementById('add-sticky-note-btn');
    if (addButton) {
        addButton.addEventListener('click', addStickyNote);
    }

    // Check if the contactForm exists before adding the event listener
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