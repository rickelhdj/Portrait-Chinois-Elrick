//CURSEUR
let mouseCursor = document.querySelector(".curseur");

window.addEventListener('mousemove', cursor);
function cursor(curs) {
  mouseCursor.style.top = curs.pageY + 'px';
  mouseCursor.style.left = curs.pageX + 'px';
}
