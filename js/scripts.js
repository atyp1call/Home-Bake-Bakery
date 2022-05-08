// Custom Scripts

// Custom scripts



// Мобильное меню бургер

function burgerMenu() {
   const burger = document.querySelector('.burger')
   const menu = document.querySelector('.menu')
   const body = document.querySelector('body')  
   burger.addEventListener('click', () => {
     if (!menu.classList.contains('active')) {
       menu.classList.add('active')  
       burger.classList.add('active-burger')      
       body.classList.add('locked')
     } else {
       menu.classList.remove('active') 
       burger.classList.remove('active-burger')
       body.classList.remove('locked')
     } 
     document.querySelectorAll('.menu__item-link').forEach(n => n.addEventListener('click', () => {
         burger.classList.remove('active-burger')
         menu.classList.remove('active')
         body.classList.remove('locked')
     }));
     
   })

   // Вот тут мы ставим брейкпоинт навбара
   window.addEventListener('resize', () => {
     if (window.innerWidth > 1199.98) {
       menu.classList.remove('active')
       burger.classList.remove('active-burger')
       body.classList.remove('locked')
     }
   })

   

 }
 
 

 burgerMenu()



 
 // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
 function fixedNav() {
   const nav = document.querySelector('nav')
 
   // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
   const breakpoint = 0
   if (window.scrollY >= breakpoint) {
     nav.classList.add('fixed__nav')
   } else {
     nav.classList.remove('fixed__nav')
   }
 }
 window.addEventListener('scroll', fixedNav)
 


 //Slider

const swiper = new Swiper('.swiper', {
  
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     clickable:true,
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   
   // And if we need scrollbar
   autoplay: {
      delay: 3000,
    },
   
   

    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 3,
    },
  }
 });



//Scroll
;