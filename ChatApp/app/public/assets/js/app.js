(function () {
  const selectors = $(".selectors-s");
  selectors.on("click", function (e) {
    e.preventDefault();
    selectors.removeClass("selectors-active");
    $(this).addClass("selectors-active");
  });
})();
