
$( document ).ready(function() {

  setTimeout(showFirstLine, 500);
  setTimeout(showSecondLine, 2200);
  setTimeout(showThirdLine, 4200);
  setTimeout(showGrayBox, 6250);
  setTimeout(showFirsticon, 6250);
  setTimeout(showSecondicon, 6400);
  setTimeout(showThirdicon, 6550);
  setTimeout(showFourthicon, 6700);
  setTimeout(showFifthicon, 6850);
  setTimeout(showSixthicon, 7000);


});

function showFirstLine() {
   $('#first-line').addClass('visible');
}

function showSecondLine() {
   $('#second-line').addClass('visible');
}

function showThirdLine() {
   $('#third-line').addClass('visible');
}

function showGrayBox() {
   $('#gray-box').addClass('visible');
}

function showFirsticon() {
   $('#first-icon').addClass('visible-icon');
}

function showSecondicon() {
   $('#second-icon').addClass('visible-icon');
}

function showThirdicon() {
   $('#third-icon').addClass('visible-icon');
}

function showFourthicon() {
   $('#fourth-icon').addClass('visible-icon');
}

function showFifthicon() {
   $('#fifth-icon').addClass('visible-icon');
}

function showSixthicon() {
   $('#sixth-icon').addClass('visible-icon');
}