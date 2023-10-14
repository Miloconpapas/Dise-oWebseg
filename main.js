$(document).ready(function () {
    $(".radio-btn").click(function () {
      $(".radio-inner").toggleClass("active"); /*Aca cuando le  hacemos click se pone "activo"*/ 
      $("body").toggleClass("dark");
    });
  });
