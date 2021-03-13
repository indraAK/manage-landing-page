const header = document.querySelector('header');

function handleBgHeader(e) {
   const scrollY = window.scrollY;
   const headerHeight = header.clientHeight;

   if (scrollY > headerHeight) {
      header.classList.add('bg-white');
   } else {
      header.classList.remove('bg-white');
   }
}

window.addEventListener('scroll', handleBgHeader);