// import Swiper js
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);
// init Swiper:
const swiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
   spaceBetween: 20,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 768px
      768: {
         slidesPerView: 2,
         spaceBetween: 30
      },
      // when window width is >= 992px
      992: {
         slidesPerView: 3,
         spaceBetween: 30
      }
   }
});