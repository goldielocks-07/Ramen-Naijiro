$(document).ready(function() {

    // hover on searchbar -------
    $("#search-bar").hover(function(){
        $(this).css("border", "2px solid red")
    },
    function() {
        $(this).css("border", "");
    });

    $("#search-bar").click(function(){
        $(this).css("color", "red")
        $(this).css("border", "2px solid red")
        
    }),
    // nu adda i search mo nga food dta search-bar -----
    $("#list li").hide();

    $("#search-bar").keyup(function() {
        var food = $(this).val().toLowerCase();

        if (food === "") {
            $("#list li").hide();
        } else {
            $("#list li").each(function() {
                var search = $(this).text().toLowerCase();
                if (search.indexOf(food) > -1) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });
});

