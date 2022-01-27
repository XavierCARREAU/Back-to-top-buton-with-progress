$(function () {
  ("use strict");

  //Scroll back to top
  $(document).ready(function () {
    ("use strict");

    //récupération des du SVG et de sa longeur
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();

    //Transition apparition
    progressPath.style.transition = progressPath.style.WebkitTransition = "none";
    //Défini la taille du pointillé en fonction de la longeur du path
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    //Récupère la syncro path / scroll
    progressPath.getBoundingClientRect();
    //Transition dispparition
    progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";

    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();

    //update le path au scroll
    $(window).scroll(updateProgress);
    var offset = 200; // décallage du top apparition
    var duration = 300; // temps annimation
    //affiche/cache le boutton
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > offset) {
        $(".progress-wrap").addClass("active-progress");
      } else {
        $(".progress-wrap").removeClass("active-progress");
      }
    });

    //Déclanche l'annimation
    $(".progress-wrap").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });

  });

})
