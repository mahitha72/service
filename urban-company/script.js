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
function myfunction()
{
  const value1 = document.getElementById("warranty").value
  localStorage.setItem("v1",value1)
}
function updateTotalCost() {
  // Get the item count and calculate the total cost
  const itemCount = document.getElementById("itemCount").value;
  const costPerItem = 50; // Replace with your actual cost per item
  const totalCost = itemCount * costPerItem;

 // Update the total cost in the HTML
  document.getElementById("totalCost").innerText = totalCost;

  // Calculate and update payment summary
  const subTotal = totalCost;
  const tax = 0.1 * subTotal; // Assuming 10% tax
  const fee = 5; // Assuming a fixed fee
  const grandTotal = subTotal + tax + fee;

  document.getElementById("subTotal").innerText = subTotal;
  document.getElementById("tax").innerText = tax;
  document.getElementById("fee").innerText = fee;
  document.getElementById("grandTotal").innerText = grandTotal;
}
document.getElementById("filtration-cell").addEventListener("click", function () {
  document.getElementById("")
});
