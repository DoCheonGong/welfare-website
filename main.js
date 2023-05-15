$(document).ready(function () {
    var isDone = true;
    /* gnb */
    $("#gnb > li").on("mouseenter", function() {
        $(this).children("a").addClass("on");
    });
    $("#gnb > li").on("mouseleave", function() {
        $(this).children("a").removeClass("on");
    });

    $("#gnb").on("mouseenter", function() {
        if (isDone) {
            isDone = false;
            $("#gnb > li > ul").stop().slideDown();
            $(".bgGnb").stop().slideDown();
        }
    });
    $("#gnb").on("mouseleave", function() {
        $("#gnb > li > ul").slideUp();
        $(".bgGnb").slideUp(function () {
            isDone = true;
        })
    });

    /* popup */
    $(".notice > .content > ul > li").eq(0).on("click", function() {
        $(".popup, .popupBg").show();
    });
    $("#close").on("click", function() {
        $(".popup, .popupBg").hide();
    });

    /* slide */
    setInterval(function () {
        $(".frame").animate({ "left": "-1200px" }, function () {
                $(".frame>li").eq(0).appendTo(".frame");
                $('.frame').css({ "left": "0" });
            })
    }, 3000);
})