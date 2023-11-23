var slideindex = 1;
showdivs(1);
function plusDivs(n) {
  showdivs((slideindex += n));
}
function showdivs(n) {
  var i;
  var x = document.getElementsByClassName("myslides");
  if (n > x.length) {
    slideindex = 1;
  }
  if (n < 1) {
    slideindex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideindex - 1].style.display = "block";
}
var flkty = new Flickity(".carousel", {
  wrapAround: true,
  autoPlay: false,
  imagesLoaded: true,
  contain: true,
  friction: 0.01, // Set a very low friction value
  pageDots: false, // Hide the page dots
});
