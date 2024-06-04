// Initialize ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Define animations with GSAP
var tween1 = gsap.timeline()
    .from("#image1", { duration: 1, opacity: 0, x: -200, ease: "power3.out" })
    .from("#testimonial1 p", { duration: 1, opacity: 0, x: 200, ease: "power3.out" }, "-=0.8");

var tween2 = gsap.timeline()
    .from("#image2", { duration: 1, opacity: 0, x: 200, ease: "power3.out" })
    .from("#testimonial2 p", { duration: 1, opacity: 0, x: -200, ease: "power3.out" }, "-=0.8");

var tween3 = gsap.timeline()
    .from("#image3", { duration: 1, opacity: 0, x: -200, ease: "power3.out" })
    .from("#testimonial3 p", { duration: 1, opacity: 0, x: 200, ease: "power3.out" }, "-=0.8");

// Create ScrollMagic scenes
new ScrollMagic.Scene({
    triggerElement: "#testimonial1",
    triggerHook: 0.8, // Adjust as needed
    reverse: false
})
.setTween(tween1)
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#testimonial2",
    triggerHook: 0.8, // Adjust as needed
    reverse: false
})
.setTween(tween2)
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#testimonial3",
    triggerHook: 0.8, // Adjust as needed
    reverse: false
})
.setTween(tween3)
.addTo(controller);
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#000000"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#000000",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

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
