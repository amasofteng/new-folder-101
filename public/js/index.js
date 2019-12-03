$(document).ready(function () {

  // select all accordion
  $('div.head, div.content .title').on('click', function(){
    // select the 1st accordion
    $("#1st").click(function(){
      // change folder to close if opened
      $("#2nd").find('i.folder').removeClass("open",true);
    });
    // select the 2nd accordion
    $("#2nd").click(function(){
      // change folder to close if opened
      $("#1st").find('i.folder').removeClass("open",true);
    });
    // toggle folder to open folder
    $(this).find('i.folder').toggleClass("open");
  });

  // select all accordion
  $('div.head a, div.content .title a, div.content a').on('click', function(){
    // remove all color
    $('.activated').removeClass('activated');
    // add color when clicked
    $(this).addClass('activated');
  });

  // initialize accordion
  $('.ui.accordion').accordion();

  // initialize dropdown
  $('.ui.dropdown').dropdown({
    // dropdown withouth changing main
    action: 'hide'
  });

  // initialize sidebar
  $('#sidebarCollapse').on('click', function () {
    // toggle on off for sidebar
    $('#sidebar').toggleClass('active');
    // for small size toggler
    $('#content').toggleClass('active');
    // toggle active folder
    var toggleA = $('i.fa-align-left');
    var toggleB = $('i.angle.double')
    if($('#sidebar').hasClass('active')){
      toggleA.removeClass('fas fa-align-left');
      toggleA.addClass('angle double right icon');
    } else {
      toggleB.removeClass('angle double right icon');
      toggleB.addClass('fas fa-align-left');
    }
  });

  // sidebar folder to sub nav breadcrumb
  $('.ui.accordion a').on('click', function() {
    var $this = $(this);
    var $bc = $('<div></div>');
    $this.parents('div.li').each(function(n, li) {
      var $a = $(li).children('div').children('a').clone();
      var $b = $(li).children('a').clone();
      $bc.prepend($a);
      $bc.prepend($b);
    });
    $('#location1').html($bc.prepend(''));
  });

  // sidebar folder to sub nav breadcrumb
  $('.ui.accordion a').on('click', function() {
    var $this = $(this);
    var $bc = $('<div></div>');
    $this.parents('div.li').each(function(n, li) {
      var $a = $(li).children('div').children('a').clone();
      var $b = $(li).children('a').clone();
      $bc.prepend($a);
      $bc.prepend($b);
    });
    $('#location2').html($bc.prepend(''));
  });

});
