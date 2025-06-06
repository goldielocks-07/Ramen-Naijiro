$(document).ready(function() { // Wait until the web page is fully loaded

    let slideImages = $("img").slice(1, 10);
    let next = ('.next');
    let prev = ('.prev');

    let counter = 0; // i tratrack na if nu ana djay current image nga naka show

    $(next).on("click", slideNext); function slideNext() {
        slideImages.eq(counter).css('animation', 'next1 1.5s ease-in-out forwards'); // if nu na click jay next button i run na detoy function ken i start na  ti ag animate ti current image then jay next image, and i animate na djay next image within 1.5 sec.  forward means from right to left.

        if (counter >=  slideImages.length  - 1) {
            counter = 0; // if nu ti current image ket last image na, i reset na ti counter to 0 tapnu ma i show na jay first image, else  ag increment jay counter by 1.
        }else  {
            counter++;
        }

        slideImages.eq(counter).css('animation', 'next2 1.5s ease-in-out forwards'); // i animate na jay sumarunu nga image within 1.5 secs. forward means from right to left.
        indicators(); // detoy ket ag update ti indicators tapnu ma i show nu ana ti current image nga naka show.
    }

    $(prev).on("click", slidePrev); function slidePrev() {
        slideImages.eq(counter).css('animation', 'prev1 1.5s ease-in-out forwards');

        if (counter === 0) {
            counter = slideImages.length - 1;
        }else {
            counter--;
        }

        slideImages.eq(counter).css('animation', 'prev2 1.5s ease-in-out forwards');
        indicators();
    }

    function autoSliding() { // detoy ket ag run ti auto sliding every 4.5 seconds
        setInterval(function() {
            slideNext(); // i call na jay slideNext nga function every 4.5 seconds
            indicators(); // and update the jay UI to show which image is currently active.
        }, 4500);
    }
    autoSliding(); // then i start na jay auto sliding.

});