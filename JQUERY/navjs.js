$(document).ready(function() {
    let nav = $(".menu_bar");
    let lastScrollTop = 0;

    $(window).scroll(function () {
        let currentScrollTop = $(this).scrollTop();
        // 0 means adda ka idjay pinaka ngato ti page
        if (currentScrollTop <= 0) { 
            nav.removeClass("hidden"); // if nu adda ka idjay pinaka ngato ti page djay navbar ket naka show/visible lata

        } else if (currentScrollTop > lastScrollTop) { // if ni user ket in sccroll down na, i add na djay class nga hidden tapnu ma i hide ni navbar
            nav.addClass("hidden");

        } else { // if ni user ket in scroll up na, i remove na djay class nga hidden and i show na ni navbar, ken it always update the lastScrollTop to currentScrollTop which is 0
            nav.removeClass("hidden");
        }

        lastScrollTop = currentScrollTop; // i update na ni lastScrollTop tapnu ma i compare na djay current scroll position na
    });
});