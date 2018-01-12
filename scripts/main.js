$(document).ready(function () {
        $('#mobile-navigation').hide();
});

$(document).ready(function () {
        $("#menu-btn").click(function () {
                $("#mobile-navigation").slideToggle(500);
        });
});

var slide = document.getElementById("slide");
var status = "closed";

function open() {
        slide.style.width = "100%";
        var status = "open";
}

function slider() {
        if (status = "closed") {
                open();
        } else {}
}

function contact() {
        slide.style.background = "#111";
        slider();
        window.setTimeout(function () {
                window.location.href = "../pages/contact.html";
        }, 1000);
}

function about() {
        slide.style.background = "#111";
        slider();
        window.setTimeout(function () {
                window.location.href = "../pages/about.html";
        }, 1000);
}

function home() {
        slide.style.background = "#111";
        slider();
        window.setTimeout(function () {
                window.location.href = "../pages/index.html";
        }, 1000);
}

function ghost() {
        slide.style.background = "url(../img/ghost/ghost-background.png)";
        slide.style.backgroundSize = "auto";

        slider();
        window.setTimeout(function () {
                window.location.href = "../pages/ghost.html";
        }, 1000);
}

function pixel() {
        slide.style.background = "url(../img/pixel-plan/pixel-background.png)";
        slide.style.backgroundSize = "auto";
        slider();
        window.setTimeout(function () {
                window.location.href = "../pages/pixel-plan.html";
        }, 1000);
}

function frank() {
        slide.style.background = "white";
        slider();
        window.setTimeout(function () {
                window.location.href = "../pages/frank.html";
        }, 1000);
}

function kanye() {
        slide.style.background = "#ed294a";
        slider();
        window.setTimeout(function () {
                window.location.href = "../pages/kanye.html";
        }, 1000);
}

function wolf() {
        slide.style.background = "#fed040";
        slider();
        window.setTimeout(function () {
                window.location.href = "../pages/wolf.html";
        }, 1000);
}

function gutenberg() {
        slide.style.background = "#ff0000";
        slider();
        window.setTimeout(function () {
                window.location.href = "../pages/gutenberg.html";
        }, 1000);
}

function schoolboy() {
        slide.style.background = "#000000";
        slider();
        window.setTimeout(function () {
                window.location.href = "../pages/schoolboy-q.html";
        }, 1000);
}

function zest() {
        slide.style.background = "#dc25a3";
        slider();
        window.setTimeout(function () {
                window.location.href = "../pages/zest.html";
        }, 1000);
}

function casadoro() {
        slide.style.background = "url(../img/casa-doro/casa-doro-background.png)";
        slider();
        window.setTimeout(function () {
                window.location.href = "../pages/casa-doro.html";
        }, 1000);
}

function phoenix() {
        slide.style.background = "#ed3f47";
        slider();
        window.setTimeout(function () {
                window.location.href = "../pages/phoenix-resourcing.html";
        }, 1000);
}

function corpwellsol() {
        slide.style.background = "white";
        slider();
        window.setTimeout(function () {
                window.location.href = "../pages/corpwellsol.html";
        }, 1000);
}

function newbalance() {
        slide.style.background = "#242c35";
        slider();
        window.setTimeout(function () {
                window.location.href = "../pages/new-balance.html";
        }, 1000);
}

function solent() {
        slide.style.background = "#f19c0f";
        slider();
        window.setTimeout(function () {
                window.location.href = "https://rynjnes.github.io/Solent-Pizza/";
        }, 1000);
}

function boiling() {
        slide.style.background = "#3e5a9a";
        slider();
        window.setTimeout(function () {
                window.location.href = "../pages/boiling-point.html";
        }, 1000);
}

function solar() {
        slide.style.background = "white";
        slider();
        window.setTimeout(function () {
                window.location.href = "../pages/solar-plan.html";
        }, 1000);
}

function onHover() {
        $("#logo").attr('src', '../img/logos/rj-animation-final.svg');
}

function offHover() {
        $("#logo").attr('src', '../img/logos/logo.svg');
}

function onHoverKanye() {
        $("#logo").attr('src', '../img/logos/rj-animation-kanye.svg');
}

function offHoverKanye() {
        $("#logo").attr('src', '../img/logos/logo-kanye.svg');
}

function onHoverFrank() {
        $("#logo").attr('src', '../img/logos/rj-animation-frank.svg');
}

function offHoverFrank() {
        $("#logo").attr('src', '../img/logos/logo-red.svg');
}

function onHoverInvert() {
        $("#logo").attr('src', '../img/logos/rj-animation-invert.svg');
}

function offHoverInvert() {
        $("#logo").attr('src', '../img/logos/logo-invert.svg');
}

function onHoverNeon() {
        $("#logo").attr('src', '../img/logos/rj-animation-neon.svg');
}

function offHoverNeon() {
        $("#logo").attr('src', '../img/logos/logo-neon.svg');
}

function onHoverOrange() {
        $("#logo").attr('src', '../img/logos/rj-animation-orange.svg');
}

function offHoverOrange() {
        $("#logo").attr('src', '../img/logos/logo-orange.svg');
}

function onHoverPurple() {
        $("#logo").attr('src', '../img/logos/rj-animation-purple.svg');
}

function offHoverPurple() {
        $("#logo").attr('src', '../img/logos/logo-purp.svg');
}
