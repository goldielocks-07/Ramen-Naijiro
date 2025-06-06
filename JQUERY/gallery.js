$(document).ready(function () {
    const $carousel = $('.carousel');

    let isDragStart = false, prevPageX, prevScrollLeft; // detoy nga variable ket i  tratrack na ni user if nu i dradrag na ni carusel, and ni prevPageX ket i store na jay last pageX position ni user, and ni prevScrollLeft ket i store na ti last scroll position ni carousel before dragging.

    $carousel.on('mousedown', function (e) { 
        isDragStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = $carousel.scrollLeft();
    });// in this function if ni user ket i prepress na jay mouse na while hovering over the carousel, i set na ni isDragStart to true, and i store na jay last pageX (horizontal) position ni user and i sasave na jay last scroll position ni user after dragging.

    $carousel.on('mousemove', function (e) {
        if (!isDragStart) return;
        e.preventDefault();
        let positionDiff = e.pageX - prevPageX;
        $carousel.scrollLeft(prevScrollLeft - positionDiff);
    }); // whenn the mouse is moving inside the carousel and if  ni user ket i dradrag na ni carousel,  ni let positionDiff ket alallaen na if how far the mouse moved since idi nag start ni user nga i drag na ni carousel, and then i scroll na ti carousel based on the positionDiff.

    $(document).on('mouseup', function () {
        isDragStart = false;
    }); // detoy met ket nu haan i dradrag ni user ti carousel, i set na ni isDragStart to false tapnu ma i stop na ti ag dragging. awn nukwa ubrana nu haan i dradrag ni user ti carousel.
});
