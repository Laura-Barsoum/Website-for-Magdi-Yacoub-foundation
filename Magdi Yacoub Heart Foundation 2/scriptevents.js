function showContent(category) {
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    event.currentTarget.classList.add("active");

    var eventContent = document.getElementById("eventContent");

    switch (category) {
        case "upcoming":
            eventContent.innerHTML = `
<br>
<br>
                <h2>Upcoming Events</h2>
                <div class="event">
                    <h3>Medical Outreach Program</h3>
                    <p>Date: March 15, 2024 | Time: 9:00 AM - 4:00 PM</p>
                    <p>Venue: Cairo</p>
                    <p>Join us for a day of health and wellness outreach.</p>
                    <a href="#" class="read-more">Read More</a>
                    <div class="additional-content" style="display: none;">
                        <p> There will be multiple activities and ways of donations present.</p>
                    </div>
                </div>
                <!-- You can add more events here -->
            `;
            break;
        case "past":
            eventContent.innerHTML = `
<br>
<br>
                <h2>Past Events</h2>
                <div class="event">
                    <h3>Annual Charity Gala 2023</h3>
                    <p>Date: December 10, 2023</p>
                    <p>Our annual gala raised funds to support life-saving surgeries for children in need.</p>
                    <a href="#" class="read-more">Read More</a>
                    <div class="additional-content" style="display: none;">
                        <p>The Annual Charity Gala 2023 was a memorable evening filled with generosity and compassion. Together, we raised vital funds to support life-saving surgeries for children in need, providing them with hope for a brighter future. The event featured inspiring speeches, musical performances, and live auctions, all made possible by the generosity of our donors and supporters.</p>
                    </div>
                </div>
            `;
            break;
        case "news":
            eventContent.innerHTML = `
<br>
<br>
                <h2>News Updates</h2>
                <div class="news-article">
                    <h3>Magdi Yacoub Foundation Receives Humanitarian Award</h3>
                    <p>Date: February 28, 2024</p>
                    <p>We are honored to receive the award for our commitment to humanitarian efforts.</p>
                    <a href="#" class="read-more">Read More</a>
                    <div class="additional-content" style="display: none;">
                       <p>We extend our heartfelt gratitude to everyone who has supported our mission and contributed to our success. Together, we will continue to pursue our vision of a healthier, more equitable world. To learn more about our recent achievements and ongoing initiatives, explore our website or contact us directly.</p>
                    </div>
                </div>
            `;
            break;
        default:
            eventContent.innerHTML = ""; // Clear content if none of the cases match
    }

    // Add a line break between the tabs and the content
    eventContent.insertAdjacentHTML('beforeend', '<br>');

    // Add event listeners to all "Read More" links
    var readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            var additionalContent = event.target.nextElementSibling;
            additionalContent.style.display = (additionalContent.style.display === 'none') ? 'block' : 'none';
            event.preventDefault(); // Prevent default link behavior
            event.target.remove(); // Remove the "Read More" link after it's clicked
        });
    });
}


// Ensure DOM content is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function () {
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