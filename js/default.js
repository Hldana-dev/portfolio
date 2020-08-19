// Slick Slider 1
$('.slider1').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 6,
    speed: 100,
    prevArrow: '.technologies-slider .slider-buttons .prev',
    nextArrow: '.technologies-slider .slider-buttons .next',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});


//  Humberger Button Toggler 
document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});


// To Delete Notifications
document.addEventListener('DOMContentLoaded', () => {
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
        $notification = $delete.parentNode;
        $delete.addEventListener('click', () => {
            $notification.parentNode.removeChild($notification);
        });
    });
});


//  Tab Started Here
const tabLinks = document.querySelectorAll('.tab-link');

const hideAllTabContents = (contents) =>
    contents.forEach(tab => tab.style.display = 'none');

const removeActiveTab = (links) =>
    links.forEach(tab => tab.className = tab.className.replace('is-active', ''));

const addActiveTab = () =>
    event.currentTarget.classList.add('is-active');

const openTab = (event, id) => {
    const tabContents = document.querySelectorAll('.tab-content');

    hideAllTabContents(tabContents);

    removeActiveTab(tabLinks);

    const projects = document.querySelectorAll(`.${id}`);
    projects.forEach(project => project.style.display = 'block');
    addActiveTab();
}

tabLinks.forEach((tab) => {
    tab.addEventListener('click', () => {
        const allContents = document.querySelectorAll('.tab-content');
        if (tab.id == 'all') {
            allContents.forEach(tabCon => tabCon.style.display = 'block');
            removeActiveTab(tabLinks);
            addActiveTab();
        }
    })
})

//    Tab Ends Here



// Smooth Scrolling
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


// Navbar Active Class Changer
function isActiveClass(event) {
    let links = document.querySelectorAll('.navbar-end a');
    links.forEach(link => {
        if (link.classList.contains('active')) {
            link.className = link.className.replace('active', '');
            event.currentTarget.classList.add('active');
        }
    });
}


// Hide Navbar onclick - Mobile size
function hideNavbarOnMobileSizeClick() {
    const navbar = document.getElementsByClassName('navbar-menu')[0];
    navbar.classList.toggle('is-active');
}

// Hide tab if thier is no content
$(function hideMeIfThierIsNoContent() {
    let countWebDev = 0, countWebDes = 0, countUiDes = 0;
    document.querySelectorAll('.tab-content').forEach(content => {
        if (content.classList.contains('web-development')) countWebDev += 1;
        if (content.classList.contains('web-design')) countWebDes += 1;
        if (content.classList.contains('ui-design')) countUiDes += 1;


    })
    if (countWebDev == 0) document.querySelector('#web-development-tab').style.display = 'none';
    if (countWebDes == 0) document.querySelector('#web-design-tab').style.display = 'none';
    if (countUiDes == 0) document.querySelector('#ui-design-tab').style.display = 'none';
});