$(document).ready(function() {
    $(".accordion").on("click",".title", function() {
        $(this).next().slideDown();

        $(".accordion-info").not($(this).next()).slideUp();
    });

    $(".accordion").on("click",".item", function() {
        $(this).addClass("active").siblings().removeClass('active');
    });
});