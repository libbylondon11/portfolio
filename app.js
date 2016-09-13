$(document).ready(function () {

    // document.getElementById("test").onclick = function () {
    //     location.href = "tdt.html";
    // };
window.addEventListener("hashchange", function() { scrollBy(0, -50) })

var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

$(function(){
    $('#test').click(function(){
        window.location='tdt.html'
    });
});
$(function(){
    $('.tdtClass2').click(function(){
        window.location='tdt.html'
    });
});
$(function(){
    $('.tdtClass').click(function(){
        window.location='tdt.html'
    });
});
$(function(){
    $('.bulk').click(function(){
        window.location='bulkCaseStudy.html'
    });
});
$(function(){
    $('.north').click(function(){
        window.location='northnile.html'
    });
});
$(function(){
    $('.permaculture').click(function(){
        window.location='permaculture.html'
    });
});
$(function(){
    $('.artShanty').click(function(){
        window.location='artshanties.html'
    });
});

$(function() {
    $('.well').matchHeight();
});

$(".collapse").collapse()
});
// });
