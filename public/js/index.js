
$(document).ready(function () {
  $('.ui.accordion').accordion();

  $('.ui.dropdown').dropdown({
    action: 'hide'
  });




    // $('.accordion div.title a').on("click", function() {
    //   $(this).hasClass('active').addClass('activated');
    // });

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });

$('div.title, div.content').on('click', function () {

    $(this.title).addClass('activated');

});

});
