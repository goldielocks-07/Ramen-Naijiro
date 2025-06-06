$(document).ready(function () {
    let rotation = 0; // i tratrack na if nu mano nga degrees ti rotation jay image
    let lastScrollTop = 0; // i sstore na jay lastscroll position tapnu ammo na if nu ag sscroll down or up

    $(window).scroll(function () { // detoy ket nu ag scroll ni user i run na detoy nga  function
        let scrollTop = $(this).scrollTop(); // alallaen na djay current scroll position ni user.

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            rotation += 5; // while scrolling  down ag aadd ti 5 degrees ti rotation ni image.
        } else if (scrollTop < lastScrollTop) {
            //  scrolling up
            rotation -= 5; // while scrolling up ag subtract ti 5 degrees ti rotation ni image.
        }

        $('#rotating-image1').css('transform', 'translate(-50%, -50%) rotate(' + rotation + 'deg)'); // i rotate na djay first iamge which is the  right image based on the rotation value. counterclockwise nukwa ti rotation na. 

        $('#rotating-image2').css('transform', 'translate(50%, -50%) rotate(' + (-rotation) + 'deg)'); // i rotate na djay second iamge which is the  left image based on the rotation value. clockwise nukwa met ti rotation na detoy. 
        
        lastScrollTop = scrollTop; // i update na ni lastScrollTop tapnu ma i compare na ti current scroll position ni user.

    });
});
