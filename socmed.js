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