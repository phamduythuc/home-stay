'use strict';
const boxContainer = document.querySelector('.header__page');
const boxLeft = document.querySelector('.header__page--left');
const boxRight = document.querySelector('.header__page--right');
const boxLength = boxRight.querySelectorAll('.header__box');
const btnUp = document.querySelector('.header__icon--up');
const btnDow = document.querySelector('.header__icon--dow');
// nav
const nav = document.querySelectorAll('.nav');
const btnclose = document.querySelector('.close');
const btnOpen = document.querySelector('.nav__icon-list');
// card
const card = document.querySelectorAll('.card') ;
// rating 
const boxText = document.querySelector('.text');
const boxImg = document.querySelector('.user-img');
const boxName = document.querySelector('.box-name');
const boxRole = document.querySelector('.role');
// seach
const inputSeach = document.querySelector('.search__input');
const btnSeach = document.querySelector('.search__btn');

// boxLeft.style.top = `-${boxLength.length -1 *100}vh`
let activeSlide = 0;
const slider = function (slide) {
    const height = boxContainer.clientHeight;
    if (slide === 'up') {
        activeSlide++;
        if (activeSlide > boxLength.length - 1){
            activeSlide = 0;
        } 
    }else if (slide === 'dow') {
        activeSlide--;
        if (activeSlide < 0){
            activeSlide = boxLength.length -1;
        }
    }
    boxLeft.style.transform = `translateY(${activeSlide * height}px)`;
    boxRight.style.transform = `translateY(-${activeSlide * height}px)`;
    console.log(boxLength.length-1);
    console.log(activeSlide);
}
btnDow.addEventListener('click', ()=> slider('dow'));
btnUp.addEventListener('click', function (e) {
    console.log(e);
    slider('up');
});

btnOpen.addEventListener('click', ()=> {
    nav.forEach(cur => cur.classList.add('visible'));
});
btnclose.addEventListener('click', ()=> {
    nav.forEach(cur => cur.classList.remove('visible'));
});

// card 

const removeClasses = function () {
    card.forEach(cur => {
        cur.classList.remove('active');
    })
}
card.forEach(cur => {
    cur.addEventListener('click', () => {
        removeClasses();
        cur.classList.add('active');
    })
})

// ra ting 

const testimonial = [
    {
        name: 'Beckham',
        position: 'Manager ',
        image: 'img/user-1.jpg',
        rating:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis erat vitae magna pharetra tempus. Donec imperdiet felis eu felis pellentesque egestas. Maecenas sed ornare lorem, ac consequat neque. In scelerisque at dui eget faucibus. Sed tortor mauris, eleifend sed ante id, facilisis consequat risus. Phasellus at orci dapibus libero viverra aliquam. Sed dictum, eros nec feugiat volutpat, ex elit vehicula sem, et molestie nunc lacus in justo. Fusce dignissim ligula elit, id blandit arcu pulvinar nec.'
    },
    {
        name: 'Azaria',
        position: 'President  ',
        image: 'img/user-2.jpg',
        rating:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis erat vitae magna pharetra tempus. Donec imperdiet felis eu felis pellentesque egestas. Maecenas sed ornare lorem, ac consequat neque. In scelerisque at dui eget faucibus. Sed tortor mauris, eleifend sed ante id, facilisis consequat risus. Phasellus at orci dapibus libero viverra aliquam. '
    },
    {
        name: 'Ethelbert',
        position: 'Supervisor  ',
        image: 'img/user-3.jpg',
        rating:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis erat vitae magna pharetra tempus. Donec imperdiet felis eu felis pellentesque egestas. Maecenas sed ornare lorem, ac consequat neque. In scelerisque at dui eget faucibus. '
    },
    {
        name: 'Maximilian',
        position: 'Receptionist  ',
        image: 'img/user-4.jpg',
        rating:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis erat vitae magna pharetra tempus. Donec imperdiet felis eu felis pellentesque egestas. Maecenas sed ornare lorem, ac consequat neque. In scelerisque at dui eget faucibus. Sed tortor mauris, eleifend sed ante id, facilisis consequat risus. Phasellus at orci dapibus libero viverra aliquam. Sed dictum, eros nec feugiat volutpat, ex elit vehicula sem, et molestie nunc lacus in justo.'
    },
    {
        name: 'Esperanza',
        position: 'Expert  ',
        image: 'img/user-5.jpg',
        rating:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis erat vitae magna pharetra tempus. Donec imperdiet felis eu felis pellentesque egestas. Maecenas sed ornare lorem, ac consequat neque.'
    },
];

let n = 1;
const update = function () {
    const {name, position, image, rating} = testimonial[n];

    boxName.textContent = name;
    boxRole.textContent = position;
    boxImg.src = image;
    boxText.textContent = rating;

    n++
    if (n > testimonial.length -1) n = 0;
}
setInterval(update, 6000);

// 

btnSeach.addEventListener('click', ()=> {
    inputSeach.classList.toggle('active');
    btnSeach.classList.toggle('actives');
    inputSeach.focus();
})