const nav = document.querySelector('nav');
const img = document.querySelector('nav img');
const links = document.querySelectorAll('nav a');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your link click event handler here
        console.log(`Link ${link.textContent} clicked!`);
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  const button = document.getElementById('gumroadButton');


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Retrieve input values
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Perform basic validation (you can add more complex validation if needed)
      if (email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // If validation passes, you can proceed with form submission
      // For demonstration purposes, I'm just logging the values to console
      console.log('Email:', email);
      console.log('Password:', password);
  
      // Optionally, you can reset the form after submission
      form.reset();
    });
  });


