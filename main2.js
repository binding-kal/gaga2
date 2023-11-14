var BAR;

var BAR2;

var TRANSITION1 = "bounce";

var RESIZES = 0;

var SELECTED_PLATFORM = false;

var USERNAME = false;

var SELECTED_VB = false;

var PLATFORM_API = false;

var API_SUCCESS = false;

var CHOSEN_MODE, A_KD, A_KILLS, A_PLAYED, A_WINRATE, A_LEVEL;

function RESIZE() {

    RESIZES++;

    if (RESIZES < 2) {

        var WH = $(window).height()

        //console.log(WH);

        var WW = $(window).width()

        //console.log(WW);

        var MARGINS_Y = Math.round((WH * 0.05) * 1.01);

        var IH = Math.round(WH * 0.9);

        var IW = Math.round(IH * 0.4954);

        console.log(IH);

        console.log(IW);

        var MARGINS_X = Math.round(((WW - IW) / 2) * 1.01);

        var _75 = Math.round(WW - MARGINS_X);

        var _95 = Math.round(WH - MARGINS_Y);

        console.log(_75);

        console.log(_95);

        console.log(MARGINS_X);

        console.log(MARGINS_Y);

        $(".SYF").css("-webkit-mask-size", IW + "px " + IH + "px");
        $(".SYF").css("mask-size", IW + "px " + IH + "px");

        $(".SYF2").css("clip-path", "polygon(0% 0%, 0% 100%, " + MARGINS_X + "px 100%, " + MARGINS_X + "px " + MARGINS_Y + "px, " + _75 + "px " + MARGINS_Y + "px, " + _75 + "px " + _95 + "px, " + MARGINS_X + "px " + _95 + "px, " + MARGINS_X + "px 100%, 100% 100%, 100% 0%)");

        if (WW < 640) {

            //console.log("telefon");

            $("body").css("overflow-x", "hidden");


            $(".BBOODDYY").append($("#C1"));

            $("#C1").css("height", "100vh");

            $("#MFR").hide();

        } else {

            $("body").css("overflow-x", "hidden");

            $("body").css("overflow-y", "hidden");

            $(".SYF").show();

            $(".SYF2").show();

            $("body").css("height", "100vh");

            $("#MF").append($("#C1"));

            $("#MFR").show();

            $(".mobile-frame").css("width", IW + "px");

        }

    }

    //console.log(RESIZES);

}

function PLAT(IMAGE, P_API = false) {

    $(".PDIV").not("." + IMAGE).removeClass("scale-[1.2] opacity-100").addClass("scale-[0.8] opacity-75");

    $("." + IMAGE).removeClass("scale-[0.8] opacity-75").addClass("scale-[1.2] opacity-100");

    SELECTED_PLATFORM = IMAGE;

    if (P_API) {
        PLATFORM_API = P_API;
    } else {
        PLATFORM_API = false;
    }

    //console.log(SELECTED_PLATFORM);
    //console.log(PLATFORM_API);

    $("#SPLAT").attr("src", "https://d13pxqgp3ixdbh.cloudfront.net/uploads/16529683600609ff3a5c98d8b2a1ac01c1e6129786.png")

}

function VBVB(AMO) {

    $(".VDIV").not("." + AMO).removeClass("scale-[1.1] opacity-100").addClass("scale-[0.8] opacity-75");

    $("." + AMO).removeClass("scale-[0.8] opacity-75").addClass("scale-[1.1] opacity-100");

    SELECTED_VB = AMO;

    //console.log(SELECTED_VB);

    $("#SPLAT").attr("src", "https://d13pxqgp3ixdbh.cloudfront.net/uploads/16529683600609ff3a5c98d8b2a1ac01c1e6129786.png")

}

function SHOW_LOADING(PREVIOUS = false, NEXT = false, BG = false, FIT = false) {

    var BGC = "bg-neutral-800"

    if (BG) {
        $("#LOADING").addClass(BGC);
    } else {
        $("#LOADING").removeClass(BGC);
    }

    $("#LOADING").removeClass("hidden").removeClass("animate__animated").removeClass("animate__" + TRANSITION1 + "OutRight").removeClass("animate__" + TRANSITION1 + "InLeft");

    $("#LOADING").addClass("animate__animated").addClass("animate__" + TRANSITION1 + "InLeft");

    BAR.set(0);

    BAR.animate(1);

    setTimeout(function () {
        $("#PRELOADING").remove();
        $("#LOADING").addClass("animate__" + TRANSITION1 + "OutRight");

        setTimeout(function () {
            $("#LOADING").addClass("hidden");
        }, 750);

        if (PREVIOUS) {
            $(PREVIOUS).addClass("hidden");
        }

        if (NEXT) {
            $(NEXT).removeClass("hidden").addClass("animate__animated animate__" + TRANSITION1 + "InLeft");

            if (FIT) {
                fitty(FIT);

                if (FIT == "#STEP4_H1") {

                    END();

                } else if (FIT == "#STEP5_H1") {

                    LAST();

                }

            }

        }

    }, 1500)

}

$(function () {

    RESIZE();

    BAR = new ProgressBar.Line(PRO, {
        strokeWidth: 8,
        easing: "easeIn",
        duration: 1000,
        //color: "#d7e6f9",
        color: "#c777fa",
        trailColor: "#262626",
        trailWidth: 6,
        svgStyle: { width: "100%", height: "100%" }
    });

    BAR2 = new ProgressBar.Line(PRO_2, {
        strokeWidth: 8,
        easing: "easeInOut",
        duration: 8000,
        //color: "#d7e6f9",
        color: "#c777fa",
        trailColor: "#262626",
        trailWidth: 6,
        svgStyle: { width: "100%", height: "100%" }
    });

    SHOW_LOADING(false, false, true);

    fitty("#LOADING_H1");

    fitty("#S1_H1");

    fitty("#S1_H3");

});

$(window).on("resize", function () {

    RESIZE();

})

function S1() {
    $("#S1").addClass("animate__animated animate__" + TRANSITION1 + "Out");

    setTimeout(function () {
        SHOW_LOADING("#S1", "#S2", false, "#STEP2_H1");

    }, 500);

}

function S2() {

    USERNAME = $("#I_USER").val();

    $("#US777").val(USERNAME);

    if (!USERNAME || !SELECTED_PLATFORM) {

        alert("Enter your Fortnite username and select your platform.")

    } else {

        API();

        $("#S2").addClass("animate__" + TRANSITION1 + "Out");

        setTimeout(function () {
            SHOW_LOADING("#S2", "#S3", false, "#STEP3_H1");

            setTimeout(function () {

                fitty("#VB_1000");
                fitty("#VB_2800");
                fitty("#VB_5000");
                fitty("#VB_13500");


            }, 1500)

        }, 500);

    }

}

var XY = 1;

function END() {

    if (XY == 1) {

        XY++;

        setTimeout(function () {

            BAR2.animate(0.2);

            $("#SEARCH").removeClass("hidden").addClass("animate__animated animate__heartBeat animate__infinite").addClass("CS_1");

            $("#CTEXT").text("Searching for user...").removeClass("hidden").addClass("animated__" + TRANSITION1 + "In").addClass("-mt-16");

            fitty("#CTEXT");

            $("#US").removeClass("hidden").addClass("animate__animated animate__" + TRANSITION1 + "In").addClass("CS_1");

            $("#PL").removeClass("hidden").addClass("animate__animated animate__" + TRANSITION1 + "In").addClass("CS_1");

            setTimeout(function () {

                $(".CS_1").removeClass("animate__infinite").addClass("animate__" + TRANSITION1 + "Out");
                $("#CTEXT").addClass("animate__" + TRANSITION1 + "Out");

                setTimeout(function () {

                    $(".CS_1").addClass("hidden");
                    $("#CTEXT").addClass("hidden").removeClass("text-neutral-50").removeClass("-mt-16");

                    $("#CDIV").removeClass("w-11/12").addClass("w-1/2");

                    $("#CTEXT").addClass("text-green-500").text("Success!").addClass("pb-8");

                    $("#CTEXT").removeClass("hidden animate__" + TRANSITION1 + "Out").addClass("animate__" + TRANSITION1 + "In")

                    fitty("#CTEXT");

                    setTimeout(function () {

                        $("#CTEXT").addClass("animate__" + TRANSITION1 + "Out");

                        $("#FINAL_IMG").attr("src", "https://d13pxqgp3ixdbh.cloudfront.net/uploads/1652968357548edc159552798ab399191f687f3918.png");

                        $("#FINAL_VB").text(SELECTED_VB);

                        setTimeout(function () {

                            $("#CDIV").removeClass("w-1/2").addClass("w-11/12");

                            $("#CTEXT").removeClass("text-green-500").removeClass("pb-8").addClass("text-neutral-50").text("Success!");

                            $("#CTEXT").text("Preparing generator...");

                            fitty("#FINAL_VB", { observeMutations: false });

                            $("#VBVB").removeClass("hidden").addClass("animate__animated animate__" + TRANSITION1 + "In").addClass("CS_2");

                            $("#CTEXT").removeClass("hidden animate__" + TRANSITION1 + "Out").addClass("animate__" + TRANSITION1 + "In");

                            $("#GEAR").removeClass("hidden").addClass("animate__animated animate__" + TRANSITION1 + "In").addClass("CS_2");

                            $("#GEAR").removeClass("animate__" + TRANSITION1 + "In").addClass("animate-spin");

                            fitty("#CTEXT");

                            BAR2.animate(0.4);

                            setTimeout(function () {

                                $("#CTEXT").addClass("animate__" + TRANSITION1 + "Out");

                                BAR2.animate(0.7);

                                setTimeout(function () {

                                    $("#CTEXT").removeClass("animate__" + TRANSITION1 + "Out").html("Adding V-Bucks!")

                                    fitty("#CTEXT")

                                    $("#CTEXT").addClass("animate__" + TRANSITION1 + "In");

                                    $("#FINAL_VB").removeClass("invisible").addClass("animate__animated animate__" + TRANSITION1 + "In").text("0");


                                    setTimeout(function () {

                                        var NBA = new countUp.CountUp("FINAL_VB", parseInt(SELECTED_VB), {
                                            startVal: 0,
                                            duration: 7,
                                            separator: "",
                                            decimal: ""
                                        })

                                        NBA.start();

                                        setTimeout(function () {

                                            $("#FINAL_VB").removeClass("text-neutral-50").addClass("text-green-500")

                                            $("#VBVB").removeClass("animate__" + TRANSITION1 + "In").addClass("animate__jello animate__infinite");

                                            $("#CTEXT").addClass("animate__" + TRANSITION1 + "Out");

                                            setTimeout(function () {

                                                $("#CTEXT").removeClass("animate__" + TRANSITION1 + "Out").html("Saving changes...")

                                                fitty("#CTEXT")

                                                $("#CTEXT").addClass("animate__" + TRANSITION1 + "In");

                                                setTimeout(function () {

                                                    $("#CTEXT").addClass("animate__" + TRANSITION1 + "Out");

                                                    setTimeout(function () {

                                                        $("#CTEXT").removeClass("animate__" + TRANSITION1 + "Out").html("Loading final step...")

                                                        fitty("#CTEXT")

                                                        $("#CTEXT").addClass("animate__" + TRANSITION1 + "In");

                                                        setTimeout(function () {

                                                            S4();

                                                        }, 3000)

                                                    }, 750)

                                                }, 3000)

                                            }, 750)

                                            BAR2.animate(1);

                                        }, 7000)

                                    }, 750)

                                }, 750)

                            }, 3000)

                        }, 750)

                    }, 1500)

                }, 750)

            }, 3000)

        }, 375);

        //$("#US").append('<div class="CPATH-2 w-full relative mx-auto p-2 PURPLEFLICK drop-shadow-2xl mb-2"> <input type="text" disabled class=" w-full bg-neutral-50 text-neutral-800 text-center CPATH-2 px-2 pt-3 pb-1 text-2xl uppercase text-shadow-sm" value="' + USERNAME + '"> </div>')

        //$("#PL").append('<div class="PURPLEFLICK w-full CPATH-1 relative p-1 drop-shadow-xl"> <div class="BGFLICK CPATH-1 w-full"> <img src="var/img/switch.png" class="mx-auto w-1/2 py-4"> </div> </div>')

    }

}

function S3() {

    if (!SELECTED_VB) {

        alert("Select how much V-Bucks you want!");

    } else {

        $("#S3").addClass("animate__animated animate__" + TRANSITION1 + "Out");

        setTimeout(function () {

            SHOW_LOADING("#S3", "#S4", false, "#STEP4_H1");

        }, 500);

    }

}

function S4() {
    $("#S4").addClass("animate__animated animate__" + TRANSITION1 + "Out");

    setTimeout(function () {

        SHOW_LOADING("#S4", "#S5", false, "#STEP5_H1");

    }, 500);

}

function LAST() {

    $("#TEXTEND").text(USERNAME + ", you are almost finished! To finish transfering " + SELECTED_VB + " V-Bucks to your account click the Verify button below and follow instructions.")

    $("#END").append($("#TEST1"));

    $("#FINAL_VB").removeClass("text-green-500").addClass("text-neutral-50")

    $("#US2").removeClass("PURPLEFLICK").addClass("BGFLICK");

    $("#PL2").removeClass("PURPLEFLICK").addClass("BGFLICK");

    $("#PL3").removeClass("BGFLICK").addClass("bg-[#CFAAEE]");

    $("#IQOS").removeClass("PURPLEFLICK").addClass("BGFLICK").addClass("-mt-2");

    $("#FINAL_VB").addClass("MONSTERENERGY")

    if (API_SUCCESS) {

        $("#END").append('<div class="grid grid-cols-3 gap-1 pt-3 items-center"> <div class="col-span-1 mx-auto w-full" id="API1"> </div> <div class="col-span-2 mx-auto w-full" id="API2"> </div> </div>');

        $("#API1").append($("#IQOS"));

        $("#IQOS").removeClass("p-2").addClass("p-1");

        $("#API2").append('<div class="w-11/12 mx-auto"> <h4 class="uppercase text-neutral-200 text-shadow-xl" id="A_LEVEL"></h4> </div> <div class="w-11/12 mx-auto"> <h4 class="uppercase text-neutral-200 text-shadow-xl" id="A_MODE"></h4> </div> <div class="w-11/12 mx-auto"> <h4 class="uppercase text-neutral-200 text-shadow-xl" id="A_PLAYED"></h4> </div> <div class="w-11/12 mx-auto"> <h4 class="uppercase text-neutral-200 text-shadow-xl" id="A_KILLS"></h4> </div> <div class="w-11/12 mx-auto"> <h4 class="uppercase text-neutral-200 text-shadow-xl" id="A_WINRATE"></h4> </div>');

        $("#A_LEVEL").html('Player level: <span class="text-neutral-50">' + A_LEVEL + '</span>');

        $("#A_MODE").html('Most played: <span class="text-neutral-50">' + CHOSEN_MODE + '</span>');

        $("#A_PLAYED").html('Matches played: <span class="text-neutral-50">' + A_PLAYED + '</span>');

        $("#A_KILLS").html('KD Ratio: <span class="text-neutral-50">' + A_KD + '</span>');

        $("#A_WINRATE").html('Winrate: <span class="text-neutral-50">' + Math.round(parseFloat(A_WINRATE) * 100) + '%</span>');

        fitty("#A_LEVEL", { minSize: 12 });

        fitty("#A_MODE", { minSize: 12 });

        fitty("#A_PLAYED", { minSize: 12 });

        fitty("#A_KILLS", { minSize: 12 });

        fitty("#A_WINRATE", { minSize: 12 });

        $(".MONSTERENERGY").remove();

        $("#FORST").append('<h3 class="uppercase text-neutral-50 text-shadow-xl tracking-[1px]" id="REMI">' + SELECTED_VB + '</h3>');

        fitty("#REMI", { minSize: 12 });

    } else {

        $("#END").append($("#IQOS"));

        $("#IQOS").removeClass("w-full").addClass("w-3/4 mx-auto")

    }

    $("#IQOS2").removeClass("BGFLICK").addClass("bg-[#CFAAEE]");

    fitty(".MONSTERENERGY");

    $("#US").removeClass("CS_1 animate__bounceOut hidden");

    $("#PL").removeClass("CS_1 animate__bounceOut hidden");

}

function isJSON(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function API() {

    var UR;

    if (PLATFORM_API) {
        UR = "var/FLICK.php?U=" + USERNAME + "&P=" + PLATFORM_API
    } else {
        UR = "var/FLICK.php?U=" + USERNAME;
    }

    const settings = {
        "async": true,
        "crossDomain": false,
        "timeout": 10000,
        "url": UR,
        "method": "GET"
    };

    $.ajax(settings).done(function (data) {

        var OOPS;

        try {

            //console.log(data);

            if (!isJSON(data)) {

                //console.log("json jest nie zmieniamy");

                OOPS = data;

            } else {

                //console.log("trzeba bylo sparsowac");

                OOPS = JSON.parse(data);

            }

            var DUO, SQUAD, TRIO, SOLO;

            //DUO

            try {

                DUO = OOPS.global_stats.duo.matchesplayed;

            } catch {

                DUO = 0;

            }

            //SQUAD

            try {

                SQUAD = OOPS.global_stats.squad.matchesplayed;

            } catch {

                SQUAD = 0;

            }

            //TRIO

            try {

                TRIO = OOPS.global_stats.trio.matchesplayed;

            } catch {

                TRIO = 0;

            }

            //SOLO

            try {

                SOLO = OOPS.global_stats.solo.matchesplayed;

            } catch {

                SOLO = 0;

            }

            //console.log(["duo", DUO, "squad", SQUAD, "trio", TRIO, "solo", SOLO].join(" | "));

            var WSZYSTKO = [DUO, SQUAD, TRIO, SOLO];

            var SLOWNIE = ["duo", "squad", "trio", "solo"];

            var POSORTOWANE = WSZYSTKO.sort((a, b) => b - a);

            //console.log(POSORTOWANE);

            //console.log("najwioecej: " + POSORTOWANE[0]);

            var NOWEWSZYSTKO = [DUO, SQUAD, TRIO, SOLO];

            var INDEX_NAJWIECEJ = NOWEWSZYSTKO.indexOf(POSORTOWANE[0]);

            //console.log("wszystko:");
            //console.log(NOWEWSZYSTKO);

            CHOSEN_MODE = SLOWNIE[INDEX_NAJWIECEJ];

            //console.log("uzywanie danych z typu gry: " + CHOSEN_MODE);

            ///////

            A_KD = OOPS.global_stats[CHOSEN_MODE].kd;

            A_KILLS = OOPS.global_stats[CHOSEN_MODE].kills;

            A_PLAYED = OOPS.global_stats[CHOSEN_MODE].matchesplayed;

            A_WINRATE = OOPS.global_stats[CHOSEN_MODE].winrate;

            A_LEVEL = OOPS.account.level;

            //console.log(["mode:", CHOSEN_MODE, "kd:", A_KD, "kills:", A_KILLS, "matches played:", A_PLAYED, "winrate:", A_WINRATE, "level:", A_LEVEL].join(" - "));

            API_SUCCESS = true;

        } catch (error) {

            console.error(error);

        }

    }).fail(function (data) {

        console.log("e");

    })
}