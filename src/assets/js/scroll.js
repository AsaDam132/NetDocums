var wrap = $("#wrap");

wrap.on("scroll", function(e) {

  if (this.scrollTop > 147) {
    wrap.addClass("#myinput");
  } else {
    wrap.removeClass("#myinput");
  }

});