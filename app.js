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
    $('.cppe').click(function(){
        window.location='cppe.html'
    });
});
$(function(){
    $('.ny').click(function(){
        window.location='ny.html'
    });
});
$(function(){
    $('.pri').click(function(){
        window.location='permaculture.html'
    });
});
$(function(){
    $('.white').click(function(){
        window.location='bulkCaseStudy.html'
    });
});
$(function(){
    $('.nile').click(function(){
        window.location='northnile.html'
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

$('#dyed1').hide()
$('#dyed2').hide()

$(".glyphicon-plus").click( function() {
      $('#dyed1').slideToggle('slow');
      $('#dyed2').slideToggle('slow');
      $('#dyed').slideToggle('slow');
})
});
