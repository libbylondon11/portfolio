$(document).ready(function () {

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
$(function(){
    $('.dye').click(function(){
        window.location='bornanddyed.html'
    });
});
//
$('#dream').hide()
$('#dream1').hide()
$('#dream2').hide()

$(".glyphicon-plus").click( function() {
      $('#dream').slideToggle('slow');
      $('#dream1').slideToggle('slow');
      $('#dream2').slideToggle('slow');
      $('#demo').slideToggle('slow');

});
$('#bulk').hide()
$('#bulk1').hide()

$(".glyphicon-plus").click( function() {
      $('#bulk').slideToggle('slow');
      $('#bulk1').slideToggle('slow');
      $('#bulkContent').slideToggle('slow');
})

$('#north').hide()
$('#north2').hide()

$(".glyphicon-plus").click( function() {
      $('#north').slideToggle('slow');
      $('#north2').slideToggle('slow');
      $('#nileContainer').slideToggle('slow');
})

$('#pri').hide()
$('#pri1').hide()

$(".glyphicon-plus").click( function() {
      $('#pri').slideToggle('slow');
      $('#pri1').slideToggle('slow');
      $('#permacultureContent').slideToggle('slow');
})
});
