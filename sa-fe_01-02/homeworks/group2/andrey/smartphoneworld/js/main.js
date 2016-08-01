'use_strict';

$(document).on("ready", function () {
    $("#loadPage").delay(3000).hide("fade", 1000, function () {
        $(".accord").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
        });
        $(".navbar").show("blind", 500, function () {
            $(".jumbotron").show("fade", 500, function () {
                $(function () {
                    $("#sidebar").show("drop", 500, function () {
                        $("#center, #foot").show("fade", 1000, function () {

                            $(window).on('scroll', function (e) {
                                var distanceY = window.pageYOffset || document.documentElement.scrollTop;
                                if (distanceY > 150) {
                                    if (!$('header').hasClass('collapse')) {
                                        $('header').addClass('collapse');
                                    }
                                } else {
                                    if ($('header').hasClass('collapse')) {
                                        $('header').removeClass('collapse');
                                    }
                                }
                            });

                            $("#mySearch").click(function () {
                                $("#center, #windowsCenter, #iosCenter, #androidCenter").hide();
                                $('.huaweiDetails, .galaxys6Details,.lgDetails,.sonyDetails,.xiaomiDetails,.lumia950Details,.lumia550Details,.lumia640Details,.iphone6sDetails,.iphone6Details,.iphone5Details').hide();
                                $(".accord").accordion({
                                    collapsible: true,
                                    active: false,
                                    heightStyle: "content"
                                });
                                $("#allPhonesCenter").fadeIn();
                                $("#mySearch").keyup(function () {

                                    // Retrieve the input field text and reset the count to zero
                                    var filter = $(this).val(),
                                        count = 0;

                                    // Loop through the comment list
                                    $("#allPhonesCenter ul li.allPhones").each(function () {

                                        // If the list item does not contain the text phrase fade it out
                                        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                                            $(this).fadeOut();

                                            // Show the list item if the phrase matches and increase the count by 1
                                        } else {
                                            $(this).show();
                                            count++;
                                        }
                                    });

                                    // Update the count
                                    var numberItems = count;
                                    $("#filter-count").text("Number of Comments = " + count);
                                });
                            });

                            $(window).resize(function () {

                                if ($(window).width() < 750) {

                                    $("#sidebar").stickyfloat('destroy');

                                } else {
                                    $("#sidebar").stickyfloat({
                                        startOffset: 315,
                                        duration: 400
                                    });
                                }

                            });

                            $(".fancybox-thumb").fancybox({
                                prevEffect: 'none',
                                nextEffect: 'none',

                                helpers: {
                                    title: {
                                        type: 'outside'
                                    },
                                    thumbs: {
                                        width: 50,
                                        height: 50
                                    }
                                }
                            });

                            $(".fancybox").fancybox({
                                width: '70%',
                                height: '70%',
                                nextClick: true,
                                arrows: true,
                                closeBtn: true
                            });

                            $(".vote").click(function () {

                                $("#votePanel").hide("blind", 400);
                                $("#panelTitle").hide();
                                $("#panelTitleonVote").fadeIn("slow");

                            });

                            $(".home").click(function () {

                                $("#windowsCenter, #iosCenter, #androidCenter, #allPhonesCenter").hide();
                                $('.huaweiDetails, .galaxys6Details,.lgDetails,.sonyDetails,.xiaomiDetails,.lumia950Details,.lumia550Details,.lumia640Details,.iphone6sDetails,.iphone6Details,.iphone5Details').hide();
                                $(".accord").accordion({
                                    collapsible: true,
                                    active: false,
                                    heightStyle: "content"
                                });
                                $("#center").fadeIn("slow");

                            });

                            $("#aboutNav").click(function () {

                                $("#windowsCenter, #iosCenter, #androidCenter, #allPhonesCenter").hide();
                                $('.huaweiDetails, .galaxys6Details,.lgDetails,.sonyDetails,.xiaomiDetails,.lumia950Details,.lumia550Details,.lumia640Details,.iphone6sDetails,.iphone6Details,.iphone5Details').hide();
                                $(".accord").accordion({
                                    collapsible: true,
                                    active: false,
                                    heightStyle: "content"
                                });

                                $("#center").show();
                                $('html, body').animate({
                                    scrollTop: $("#aboutUs").offset().top - 70
                                }, 800);
                            });

                            $("#contactNav").click(function () {

                                $("#windowsCenter, #iosCenter, #androidCenter, #allPhonesCenter").hide();
                                $('.huaweiDetails, .galaxys6Details,.lgDetails,.sonyDetails,.xiaomiDetails,.lumia950Details,.lumia550Details,.lumia640Details,.iphone6sDetails,.iphone6Details,.iphone5Details').hide();
                                $(".accord").accordion({
                                    collapsible: true,
                                    active: false,
                                    heightStyle: "content"
                                });

                                $("#center").show();
                                $('html, body').animate({
                                    scrollTop: $("#contactMe").offset().top - 100
                                }, 800);
                            });

                            $("#ratesNav").click(function () {

                                $("#windowsCenter, #iosCenter, #androidCenter, #allPhonesCenter").hide();
                                $('.huaweiDetails, .galaxys6Details,.lgDetails,.sonyDetails,.xiaomiDetails,.lumia950Details,.lumia550Details,.lumia640Details,.iphone6sDetails,.iphone6Details,.iphone5Details').hide();
                                $(".accord").accordion({
                                    collapsible: true,
                                    active: false,
                                    heightStyle: "content"
                                });

                                $("#center").show();

                                $('html, body').animate({
                                    scrollTop: $("#stats").offset().top - 70
                                }, 800);
                            });

                            $("#android").click(function () {

                                $("#windowsCenter, #iosCenter, #center, #allPhonesCenter").hide();
                                $('.huaweiDetails, .galaxys6Details,.lgDetails,.sonyDetails,.xiaomiDetails,.lumia950Details,.lumia550Details,.lumia640Details,.iphone6sDetails,.iphone6Details,.iphone5Details').hide();
                                $("html, body").animate({
                                    scrollTop: 0
                                }, "slow");
                                $('#androidCenter').fadeIn("slow");
                            });



                            $('.huaweiDetailsLink').click(function (e) {
                                e.stopPropagation();
                                $('.huaweiDetails').fadeIn();
                                return false;
                            });

                            $(document).click(function () {
                                $('.huaweiDetails').fadeOut();
                            });


                            $('.galaxys6DetailsLink').click(function (e) {
                                e.stopPropagation();
                                $('.galaxys6Details').fadeIn();
                                return false;
                            });

                            $(document).click(function () {
                                $('.galaxys6Details').fadeOut();
                            });


                            $('.lgDetailsLink').click(function (e) {
                                e.stopPropagation();
                                $('.lgDetails').fadeIn();
                                return false;
                            });

                            $(document).click(function () {
                                $('.lgDetails').fadeOut();
                            });

                            $('.sonyDetailsLink').click(function (e) {
                                e.stopPropagation();
                                $('.sonyDetails').fadeIn();
                                return false;
                            });

                            $(document).click(function () {
                                $('.sonyDetails').fadeOut();
                            });

                            $('.xiaomiDetailsLink').click(function (e) {
                                e.stopPropagation();
                                $('.xiaomiDetails').fadeIn();
                                return false;
                            });

                            $(document).click(function () {
                                $('.xiaomiDetails').fadeOut();
                            });

                            $('.lumia950DetailsLink').click(function (e) {
                                e.stopPropagation();
                                $('.lumia950Details').fadeIn();
                                return false;
                            });

                            $(document).click(function () {
                                $('.lumia950Details').fadeOut();
                            });

                            $('.lumia550DetailsLink').click(function (e) {
                                e.stopPropagation();
                                $('.lumia550Details').fadeIn();
                                return false;
                            });

                            $(document).click(function () {
                                $('.lumia550Details').fadeOut();
                            });

                            $('.lumia640DetailsLink').click(function (e) {
                                e.stopPropagation();
                                $('.lumia640Details').fadeIn();
                                return false;
                            });

                            $(document).click(function () {
                                $('.lumia640Details').fadeOut();
                            });

                            $('.iphone6sDetailsLink').click(function (e) {
                                e.stopPropagation();
                                $('.iphone6sDetails').fadeIn();
                                return false;
                            });

                            $(document).click(function () {
                                $('.iphone6sDetails').fadeOut();
                            });

                            $('.iphone6DetailsLink').click(function (e) {
                                e.stopPropagation();
                                $('.iphone6Details').fadeIn();
                                return false;
                            });

                            $(document).click(function () {
                                $('.iphone6Details').fadeOut();
                            });

                            $('.iphone5DetailsLink').click(function (e) {
                                e.stopPropagation();
                                $('.iphone5Details').fadeIn();
                                return false;
                            });

                            $(document).click(function () {
                                $('.iphone5Details').fadeOut();
                            });


                            $("#windows").click(function () {
                                $("#androidCenter, #iosCenter, #center, #allPhonesCenter").hide();
                                $('.huaweiDetails, .galaxys6Details,.lgDetails,.sonyDetails,.xiaomiDetails,.lumia950Details,.lumia550Details,.lumia640Details,.iphone6sDetails,.iphone6Details,.iphone5Details').hide();
                                $("html, body").animate({
                                    scrollTop: 0
                                }, "slow");
                                $("#windowsCenter").fadeIn("slow");
                            });

                            $("#ios").click(function () {
                                $("#androidCenter, #windowsCenter, #center, #allPhonesCenter").hide();
                                $('.huaweiDetails, .galaxys6Details,.lgDetails,.sonyDetails,.xiaomiDetails,.lumia950Details,.lumia550Details,.lumia640Details,.iphone6sDetails,.iphone6Details,.iphone5Details').hide();
                                $("html, body").animate({
                                    scrollTop: 0
                                }, "slow");
                                $("#iosCenter").fadeIn("slow");
                            });



                            $(window).on('resize', function () {
                                $('#item-preview').each(function () {
                                    var width = $(this).width();
                                    $(this).find('iframe').height(width * 0.7);
                                });
                                var min_height = $(window).height() - $('footer').outerHeight() - $('header').outerHeight();

                                if (min_height > 0) {
                                    $('main').css('min-height', '' + min_height + 'px');
                                }
                            });

                            $(window).resize(); // trigger the resize event in order to set footer position

                            $("#loginButton").click(function loginValidator() {

                                var name = $('#uid').val();
                                var pass = $("input[type=password]").val();

                                if ((name == "Andro" && pass == "1234") || (name == "andro" && pass == "1234") || (name == "Jeni" && pass == "5678") || (name == "jeni" && pass == "5678")) {
                                    $("#loginTitle").html("Hello!");
                                    $("#loginButton,#uid, input[type=password]").hide();
                                    $("#loginAlert").html("Welcome, Andrey!");
                                    $("#loginAlert").fadeIn("slow");
                                    $("#logoutButton").fadeIn("slow");
                                    return false;
                                } else {
                                    $("#loginAlert").html("Incorrect username or password. Please try again.");
                                    $("#loginAlert").fadeIn("slow");
                                }
                                return false;

                            });

                            $("#logoutButton").click(function () {
                                $("#loginAlert").hide();
                                $("#logoutButton").hide();
                                $("#loginTitle").html("Log In");
                                $('#uid').val('');
                                $("input[type=password]").val('');
                                $("#loginButton,.form-control").fadeIn();

                            });

                            function notEmpty(elem, helperMsg) {
                                if (elem.value.length == 0) {
                                    alert(helperMsg);
                                    elem.focus(); // set the focus to this input
                                    return false;
                                }
                                return true;
                            }

                            function isAlphabet(elem, helperMsg) {
                                var alphaExp = /^[a-zA-Z]+$/;
                                if (elem.value.match(alphaExp)) {
                                    return true;
                                } else {
                                    alert(helperMsg);
                                    elem.focus();
                                    return false;
                                }
                            }

                            function emailValidator(elem, helperMsg) {
                                var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
                                if (elem.value.match(emailExp)) {
                                    return true;
                                } else {
                                    alert(helperMsg);
                                    elem.focus();
                                    return false;
                                }
                            }

                            $("#submitContact").click(function () {

                                var name = document.getElementById('name');
                                var email = document.getElementById('email');
                                var msg = document.getElementById('msg');
                                if (isAlphabet(name, "Please enter only letters for your name")) {

                                    if (emailValidator(email, "Please enter a valid email address")) {
                                        if (notEmpty(msg, "Please state your message")) {
                                            document.getElementById('contactAlert').style.display = 'block';
                                            document.getElementById('reset').click();

                                            return false;
                                        }
                                    }
                                }
                                return false;
                            });
                        });
                    });
                });
            });
        });
    });
});
