$(document).ready(function () {
        $('#mobile-navigation').hide();
});

$(document).ready(function () {
        $("#menu-btn").click(function () {
                $("#mobile-navigation").slideToggle(500);
        });
});
