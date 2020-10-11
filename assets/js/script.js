function init() {
    
}

//Javascript Code

//Navigation Bar
window.addEventListener("scroll", function() {
    var navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Toggle the Navigation
    if(burger) {
        burger.addEventListener('click', true, () => {
            nav.classList.toggle('nav-active');
    
            //Animate the Links
            navLinks.forEach((link, index) => {
                if(link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`
                }
            });
    
            //Burger Animation
            burger.classList.toggle('toggle');
        });
    }
    
}

navSlide();

//Parallax Header Image Effect
const parallax = document.getElementById("parallax");

if(parallax) {

    window.addEventListener("scroll", true, function() {
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 1.1 + "px";
    });

}



//jQuery Code

$(document).ready(function(){
    $('ul.right li').on('click', function(){
        var clicked = $(this);
        $('ul.right li').each(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
        });
        $(this).addClass('active');
    });
});


