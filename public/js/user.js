
  var button = document.querySelector(".cta");
  var contentCtr = document.querySelector(".content-ctr");

  button.addEventListener("click", function() {
    var header;
    header = this.parentElement.parentElement;
    header.classList.toggle("active");
    var name = document.querySelector(".signup").textContent;

    if(name === "SIGN-UP"){
      document.querySelector(".signup").textContent = "SIGN-IN";
      document.querySelector(".cc").textContent = "SIGN-UP ...";

      document.getElementById("ccc").classList.remove("sign-in");
      document.getElementById("ccc").classList.add("user", "plus");

      document.getElementById("cccc").classList.remove("user", "plus");
      document.getElementById("cccc").classList.add("sign-in");


    } else {
      document.querySelector(".signup").textContent = "SIGN-UP";
      document.querySelector(".cc").textContent = "SIGN-IN ...";

      document.getElementById("ccc").classList.remove("user", "plus");
      document.getElementById("ccc").classList.add("sign-in");

      document.getElementById("cccc").classList.remove("sign-in");
      document.getElementById("cccc").classList.add("user", "plus");
    }
    return contentCtr.classList.toggle("active");
  });
