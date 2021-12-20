// Инициализация слайдера
import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
const projectsSlider = new Swiper('.projects__slider', {
  loop: !0,
  loopedSlides: 20,
  observer: !0,
  observeParents: !0,
  slidesPerView: 'auto',
  centeredSlides: !0,
  autoHeight: !1,
  speed: 800,
  spaceBetween: 0,

  navigation: {
    nextEl: '.projects__slider-btn--next',
    prevEl: '.projects__slider-btn--prev'
  }
});

// Закрепляем панель навигации при скролле
const toggleHeader = () => {
  const header = document.querySelector('.header'),
    headerLogo = document.querySelector('.header__logo>img'),
    headerNavLink = document.querySelectorAll('.header-nav__list-link'),
    headerPhone = document.querySelector('.header__phone'),
    burgerLine = document.querySelectorAll('.header-burger__line'),
    offset = header.offsetTop,
    headerHeight = header.clientHeight;
  let widthWindow = window.innerWidth;

  window.addEventListener('resize', () => {
    widthWindow = window.innerWidth;
  });

  document.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset;
    if (widthWindow >= 992) {
      if (scrolled >= offset) {
        if (!header.matches('.header--project')) {
          header.style.marginBottom = `${headerHeight}px`;
          header.classList.add('header--fixed', 'header--bg-light');
          headerLogo.src = './assets/images/logo-black.svg';
          headerNavLink.forEach((item) => {
            item.classList.add('header-nav__list-link--fixed');
          });
          burgerLine.forEach((item) => {
            item.classList.add('header-burger__line--fixed');
          });
          headerPhone.classList.add('header__phone--fixed');
        }
      } else if (scrolled <= offset) {
        if (!header.matches('.header--project')) {
          header.style.marginBottom = '0px';
          header.classList.remove('header--fixed', 'header--bg-light');
          headerLogo.src = './assets/images/logo-white.svg';
          headerNavLink.forEach((item) => {
            item.classList.remove('header-nav__list-link--fixed');
          });
          burgerLine.forEach((item) => {
            item.classList.remove('header-burger__line--fixed');
          });
          headerPhone.classList.remove('header__phone--fixed');
        }
      }
    } else {
      if (scrolled >= offset) {
        if (!header.matches('.header--project')) {
          header.classList.add('header--bg-light');
          headerLogo.src = './assets/images/logo-black.svg';
          burgerLine.forEach((item) => {
            item.classList.add('header-burger__line--fixed');
          });
        }
      } else if (scrolled <= offset) {
        if (!header.matches('.header--project')) {
          header.classList.remove('header--bg-light');
          headerLogo.src = './assets/images/logo-white.svg';
          burgerLine.forEach((item) => {
            item.classList.remove('header-burger__line--fixed');
          });
        }
      }
    }
  });
};

toggleHeader();

// Активируем меню бургер
const toggleMenu = () => {
  const body = document.querySelector('body'),
    headerContainer = document.querySelector('.header__container'),
    headerBurger = document.querySelector('.header-burger'),
    headerNav = document.querySelector('.header-nav'),
    headerLogo = document.querySelector('.header__logo>img'),
    headerContacts = document.querySelector('.header-contacts');

  headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('header-burger--active');
    headerContainer.classList.toggle('header__container--mobile');
    headerNav.classList.toggle('header-nav--active');
    [headerLogo.src, headerLogo.dataset.img] = [headerLogo.dataset.img, headerLogo.src];
    headerContacts.classList.toggle('header-contacts--active');
    body.classList.toggle('hidden');
  });
};

toggleMenu();
