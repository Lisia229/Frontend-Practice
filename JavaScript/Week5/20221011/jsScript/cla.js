// star
for (var i = 0; i < 3; i++) {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); svg.setAttribute("class", "stars"); svg.setAttribute("width", "100%"); svg.setAttribute("height", "100%"); svg.setAttribute("preserveAspectRatio", "none"); for (let j = 0; j < 120; j++) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle"); circle.setAttribute("class", "star"); circle.setAttribute("cx", r(0, 100) + "%"); circle.setAttribute("cy", r(0, 100) + "%"); circle.setAttribute("r", r(0, 2)); svg.appendChild(circle);
  } document.getElementsByClassName("stars-wrapper")[0].appendChild(svg);
} function r(m, n) {
  return (Math.random() * (n - m) + m).toFixed(2);
}

