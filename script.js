const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.querySelector('.theme-switch-wrapper');

// Dark Mode Styles
function darkMode() {
  document.body.style.backgroundColor = 'var(--color-bg-dark)';
  // Assuming you have a logo element, update its color
  document.querySelector('.logo').style.color = 'var(--color-logo-dark)';
  // Assuming you have an h1 element, update its color
  document.querySelector('h1').style.color = 'var(--color-h1-dark)';
  // Update the color of all p elements
  document.querySelectorAll('p').forEach(p => p.style.color = 'var(--color-p-dark)');
  document.body.classList.add('dark-mode'); // Add a class for dark mode
  toggleIcon.children[0].children[1].classList.replace('fa-sun', 'fa-moon');
}

// Light Mode Styles
function lightMode() {
  document.body.style.backgroundColor = 'var(--color-bg-light)';
  // Assuming you have a logo element, update its color
  document.querySelector('.logo').style.color = 'var(--color-logo-light)';
  // Assuming you have an h1 element, update its color
  document.querySelector('h1').style.color = 'var(--color-h1-light)';
  // Update the color of all p elements
  document.querySelectorAll('p').forEach(p => p.style.color = 'var(--color-p-light)');
  document.body.classList.remove('dark-mode'); // Remove the dark mode class
  toggleIcon.children[0].children[1].classList.replace('fa-moon', 'fa-sun');
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}




//Top button-page Home
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//Filter Projects in Homepage
document.addEventListener("DOMContentLoaded", function () {
  filterSelection("all");

  // Add click event listener to filter buttons
  document.querySelectorAll('.btn-f').forEach(function (button) {
      button.addEventListener('click', function () {
          filterSelection(this.dataset.filter);
          setActiveButton(this);
      });
  });
});

function filterSelection(category) {
  document.querySelectorAll('.project').forEach(function (project) {
      const categories = project.classList;
      const shouldShow = category === 'all' || categories.contains(category);

      if (shouldShow) {
          project.classList.add('show');
      } else {
          project.classList.remove('show');
      }
  });
}

function setActiveButton(clickedButton) {
  // Remove 'active' class from all buttons
  document.querySelectorAll('.btn-f').forEach(function (button) {
      button.classList.remove('active');
  });

  // Add 'active' class to the clicked button
  clickedButton.classList.add('active');
}


//click to go down

document.addEventListener('DOMContentLoaded', function() {
    var scrollToProjects = document.querySelector('.scroll-to-projects');

    scrollToProjects.addEventListener('click', function(event) {
        event.preventDefault();

        var projectsSection = document.getElementById('home_projects');
        
        // Using smooth scroll behavior
        projectsSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

