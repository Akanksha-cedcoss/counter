var total = 0;
function incre() {
  var value = parseInt(document.getElementById("number").value);

  value++;
  document.getElementById("number").value = value;
}
function decre() {
  var value = parseInt(document.getElementById("number").value);

  value--;
  if (value < 0) {
    value = 0;
  }
  document.getElementById("number").value = value;
}
