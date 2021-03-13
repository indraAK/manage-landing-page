const mobileNav = document.getElementById('mobile-menu');
const toggleMenu = document.getElementById('toggle-menu');

toggleMenu.addEventListener('click', function () {
   this.classList.toggle('active');

   if (this.classList.contains('active')) {
      mobileNav.classList.add('show');
   } else {
      mobileNav.classList.remove('show');
   }
});
