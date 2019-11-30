$(document).ready(function () {
  $(".cta").click(function() {
    $(this).parents().toggleClass("active");
    var name = $(".sign-up").text();
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
    return $(".content-ctr").toggleClass("active");
  });
});
