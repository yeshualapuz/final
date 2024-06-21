function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").classList.add("shifted");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").classList.remove("shifted");
}
document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.collage-item');
  
  items.forEach((item, index) => {
      setTimeout(() => {
          item.style.opacity = '1'; // Fade in the item
          item.style.transform = 'translateY(0)'; // Slide up the item
      }, index * 350); // Adjust delay time as needed (1000 milliseconds = 1 second)
  });
});