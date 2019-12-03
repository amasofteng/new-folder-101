$(document).ready(function () {

  // click signup signin button
  $(".cta").click(function() {

    // toggle active to cta parents
    $(this).parents().toggleClass("active");

    // initialize change text
    var name = $(".sign-up").text();

    // change text and icons when active
    if(name === "SIGN-UP"){
      name = $(".sign-up").text("SIGN-IN");
      $(".cc").text("SIGN-UP ...");
      $("#ccc").removeClass("sign-in");
      $("#ccc").addClass("signup");
    } else {
      name = $(".sign-up").text("SIGN-UP");
      $(".cc").text("SIGN-IN ...");
      $("#ccc").removeClass("signup");
      $("#ccc").addClass("sign-in");
    }

    // end the click with active content
    return $(".content-ctr").toggleClass("active");
  });
});
