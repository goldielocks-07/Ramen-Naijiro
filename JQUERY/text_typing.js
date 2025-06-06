$(document).ready(function () {
    let x = 0;
    const text = "About Ramen Naijiro";
    const $container = $('#effect');

    function animate() {
        if (x < text.length) {
            $container.text($container.text() + text.charAt(x));
            x++;
            setTimeout(animate, 90);
        } else {
            setTimeout(() => {
                $container.text('');
                x = 0;
                animate();
            }, 2500);
        }
    }
    animate();
});

