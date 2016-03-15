(function (w) {
  var d = w.document,
      headerList = d.querySelector('main').querySelectorAll("h2[id], h3[id]");
  for (var i = 0, header, link; header = headerList[i]; ++i) {
    link = d.createElement("a");
    link.className = "header-permalink";
    link.title = "Permalink";
    link.href = "#" + header.id;
    link.innerHTML = "&#182;";
    header.appendChild(link);
  }
})(window);