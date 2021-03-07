const swiper = new Swiper('.swiper-first-container', {
    // Optional parameters

    loop: true,
    spaceBetween: 100,
    speed: 1000,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    autoplay: {
      delay: 3000,
    },
    
     
    
  });

  const swiperClients = new Swiper('.swiper-clients', {
    // Optional parameters
    
    direction: 'horizontal',
    
    
    loop: true,
    spaceBetween: 100,
    speed: 1000,
    centeredSides: true,

    // Navigation arrows
    navigation: {
      nextEl: '.btn-clients-next',
      prevEl: '.btn-clients-prev',
    },
    slidesPerView: 1,
    
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      // when window width is >= 320px
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      },
     976: {
       slidesPerView: 3,
     },
     722 : {
       slidesPerView: 2,
       spaceBetween: 15,
      
     },
   
    }
  });

  const swiperRev = new Swiper('.swiper-reviews', {
    
    
    loop: true,
    speed: 1000,
    slidesPerView:3,
    spaceBetween:100,
  
   
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.btn-clients-next',
      prevEl: '.btn-clients-prev',
    },
  
    // And if we need scrollbar
    breakpoints: {
      // when window width is >= 320px
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1: {
        slidesPerView: 1,
        spaceBetween: 20
      },
    }
  });

  const swiperClinic = new Swiper('.swiper-clinic', {
    // Optional parameters
   slidesPerView:3,
   spaceBetween: 50,
    loop: true,
  
    
  
    
    navigation: {
      nextEl: '.swiper-button-next-clinic',
      prevEl: '.swiper-button-prev-clinic',
    },
    breakpoints: {
      // when window width is >= 320px
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      319: {
        slidesPerView: 1,
        spaceBetween: 20
      },
    }
  });
  const swiperProf = new Swiper('.swiper-prof', {
    // Optional parameters
    
    slidesPerView:4,
   spaceBetween: 50,
    loop: true,
  
  
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-clinic',
      prevEl: '.swiper-button-prev-clinic',
    },
    breakpoints: {
      // when window width is >= 320px
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      319: {
        slidesPerView: 1,
        spaceBetween: 20
      },
    }
  
  
  });
  // let a = document.querySelector('.btn-swiper-first');
  // a.addEventListener('click', function(e) {
  //   console.log(e.target);
  // });

  let popup = document.querySelector('.header-top-call__popup');
  let popupMenu = document.querySelector('.popup');
  let popupClose = document.querySelector('.close')

  popup.addEventListener('click', function(){
    popupMenu.style.display = 'flex';
  });
  popupClose.addEventListener('click', function(){
    popupMenu.style.display = 'none';
  });